import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { conversationStore } from '../services/memory.js';
import { generateSystemPrompt } from '../services/prompts.js';
import nutritionKnowledge from '../services/knowledge.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { message, userId = 'default-user', conversationId } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  console.log(`📨 User message: ${message}`);

  // Get or create conversation history
  const conversation = conversationStore.get(userId, conversationId);
  
  // Add user message to history
  conversation.messages.push({
    role: 'user',
    content: message,
    timestamp: new Date().toISOString(),
  });

  // Infer user context from conversation history
  const userContext = inferUserContext(conversation.messages);

  // Try API first, fall back to knowledge base
  let assistantMessage = '';
  let usedKnowledgeBase = false;
  
  // Check if API key is valid
  const apiKey = process.env.GEMINI_API_KEY;
  const useAPI = apiKey && apiKey.length > 30 && !apiKey.includes('your_api_key_here');

  if (useAPI) {
    try {
      console.log('🤖 Attempting Gemini API...');
      const genAI = new GoogleGenerativeAI(apiKey);
      assistantMessage = await getGeminiResponse(genAI, conversation, message, userContext);
      console.log('✅ Gemini API response received');
    } catch (error) {
      console.error('❌ API failed:', error.message);
      console.log('📚 Switching to Knowledge Base...');
      assistantMessage = nutritionKnowledge.generateResponse(message);
      usedKnowledgeBase = true;
    }
  } else {
    console.log('📚 Using Knowledge Base (no valid API key)');
    assistantMessage = nutritionKnowledge.generateResponse(message);
    usedKnowledgeBase = true;
  }

  // Add assistant response to history
  conversation.messages.push({
    role: 'assistant',
    content: assistantMessage,
    timestamp: new Date().toISOString(),
  });

  // Save conversation
  conversationStore.save(userId, conversation);

  res.json({
    response: assistantMessage,
    conversationId: conversation.id,
    inferredContext: userContext,
    source: usedKnowledgeBase ? 'knowledge-base' : 'gemini-api',
    timestamp: new Date().toISOString(),
  });
});

async function getGeminiResponse(genAI, conversation, message, userContext) {
  const model = genAI.getGenerativeModel({ 
    model: 'gemini-1.5-flash',
  });
  
  const systemPrompt = generateSystemPrompt(userContext);
  
  // Build conversation history for Gemini
  const chatHistory = conversation.messages.slice(0, -1).map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }],
  }));
  
  const chat = model.startChat({
    history: chatHistory,
    generationConfig: {
      maxOutputTokens: 2048,
      temperature: 0.9,
      topP: 0.95,
      topK: 40,
    },
  });

  // Send message with system prompt context
  const fullPrompt = chatHistory.length === 0 
    ? `${systemPrompt}\n\nUser Question: ${message}\n\nProvide a detailed, accurate, and helpful response.`
    : message;
  
  const result = await chat.sendMessage(fullPrompt);
  return result.response.text();
}

// Helper function to infer user context from conversation
function inferUserContext(messages) {
  const context = {
    healthGoals: [],
    concerns: [],
    preferences: [],
    lifestyle: null,
  };

  const recentMessages = messages.slice(-10).map(m => m.content.toLowerCase());
  const allText = recentMessages.join(' ');

  // Infer health goals from conversation patterns
  if (allText.match(/sugar|sweet|glucose|glycemic|spike|crash|diabete/)) {
    context.healthGoals.push('blood sugar management');
  }
  
  if (allText.match(/energy|tired|fatigue|afternoon.*slump|focus|alert/)) {
    context.healthGoals.push('sustained energy');
  }
  
  if (allText.match(/gut|bloat|digestion|stomach|probiotic|fiber|ibs|fodmap/)) {
    context.healthGoals.push('gut health');
  }
  
  if (allText.match(/weight|calorie|lose.*weight|diet|lean/)) {
    context.healthGoals.push('weight management');
  }
  
  if (allText.match(/muscle|protein|workout|gym|gain|strength/)) {
    context.healthGoals.push('muscle building');
  }

  // Infer lifestyle
  if (allText.match(/vegan|plant-based|animal.*product/)) {
    context.lifestyle = 'vegan/plant-based';
  } else if (allText.match(/keto|low.*carb|ketogenic/)) {
    context.lifestyle = 'keto/low-carb';
  } else if (allText.match(/vegetarian/)) {
    context.lifestyle = 'vegetarian';
  }

  return context;
}

export default router;

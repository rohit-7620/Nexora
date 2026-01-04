import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';

const router = express.Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Helper function to determine health verdict based on ingredients
function getHealthVerdict(ingredients) {
  const unhealthyKeywords = [
    'msg', 'monosodium glutamate', 'tbhq', 'artificial color', 
    'artificial flavour', 'hydrogenated', 'high fructose corn syrup',
    'sodium benzoate', 'potassium sorbate', 'tartrazine', 'sunset yellow'
  ];
  
  const cautionKeywords = [
    'sugar', 'palm oil', 'refined', 'sodium', 'preservative',
    'flavor enhancer', 'acidity regulator'
  ];

  const ingredientsLower = ingredients.toLowerCase();
  
  let unhealthyCount = 0;
  let cautionCount = 0;

  unhealthyKeywords.forEach(keyword => {
    if (ingredientsLower.includes(keyword)) unhealthyCount++;
  });

  cautionKeywords.forEach(keyword => {
    if (ingredientsLower.includes(keyword)) cautionCount++;
  });

  if (unhealthyCount >= 2) {
    return {
      verdict: 'unhealthy',
      icon: '❌',
      title: 'Not Recommended',
      subtitle: 'Contains multiple harmful additives'
    };
  } else if (unhealthyCount === 1 || cautionCount >= 3) {
    return {
      verdict: 'caution',
      icon: '⚠️',
      title: 'Consume with Caution',
      subtitle: 'Contains some concerning ingredients'
    };
  } else if (cautionCount > 0) {
    return {
      verdict: 'caution',
      icon: '⚠️',
      title: 'Moderate Choice',
      subtitle: 'Better alternatives available'
    };
  } else {
    return {
      verdict: 'healthy',
      icon: '✅',
      title: 'Good Choice',
      subtitle: 'Relatively clean ingredients'
    };
  }
}

router.post('/', async (req, res) => {
  try {
    const { imageBase64, userId = 'default-user' } = req.body;

    if (!imageBase64) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    // Use Gemini Vision API to analyze the image
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
    
    // Remove data URL prefix if present
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
    
    const imageParts = [
      {
        inlineData: {
          data: base64Data,
          mimeType: 'image/jpeg',
        },
      },
    ];

    const prompt = `Analyze this food product image and extract the complete ingredient list. 
Focus on:
1. Reading ALL ingredients from the label
2. Listing them exactly as shown on the package
3. Identifying any allergen information
4. Noting nutritional highlights if visible

Please provide the ingredients in a clear, formatted list.`;

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const extractedIngredients = response.text();

    // Get health verdict
    const healthVerdict = getHealthVerdict(extractedIngredients);

    res.json({
      ingredients: extractedIngredients,
      verdict: healthVerdict,
      message: 'Ingredients extracted successfully',
    });
  } catch (error) {
    console.error('Image processing error:', error);
    res.status(500).json({ 
      error: 'Failed to process image',
      details: error.message,
    });
  }
});

export default router;

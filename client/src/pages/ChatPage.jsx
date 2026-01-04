import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './ChatPage.css';

export default function ChatPage({ conversationId, conversations, setConversations, onNewChat }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initialize messages from conversation
  useEffect(() => {
    if (conversationId) {
      const conversation = conversations.find(c => c.id === conversationId);
      if (conversation) {
        setMessages(conversation.messages || []);
      }
    }
  }, [conversationId, conversations]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!input.trim() || loading) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: input,
      timestamp: new Date().toISOString(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    // Update conversation title if first message
    if (messages.length === 0) {
      const updatedConversations = conversations.map(c => {
        if (c.id === conversationId) {
          return {
            ...c,
            title: input.substring(0, 40) + (input.length > 40 ? '...' : ''),
            messages: newMessages,
          };
        }
        return c;
      });
      setConversations(updatedConversations);
    }

    try {
      const response = await axios.post('http://localhost:3001/api/chat', {
        message: input.trim(),
        userId: 'default-user',
      }, {
        timeout: 30000,
      });

      const assistantMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: response.data.response,
        timestamp: new Date().toISOString(),
      };

      const finalMessages = [...newMessages, assistantMessage];
      setMessages(finalMessages);

      // Update conversation
      const updatedConversations = conversations.map(c => {
        if (c.id === conversationId) {
          return { ...c, messages: finalMessages };
        }
        return c;
      });
      setConversations(updatedConversations);
    } catch (err) {
      console.error('Error:', err);
      
      let errorMessage = 'Network error: ';
      if (err.code === 'ECONNREFUSED') {
        errorMessage += 'Server not running. Start the server with: npm run dev';
      } else if (err.response?.status === 500) {
        errorMessage += 'Server error. Check your GEMINI_API_KEY in .env';
      } else {
        errorMessage += err.message;
      }

      const errorMsg = {
        id: Date.now() + 1,
        type: 'error',
        content: errorMessage,
        timestamp: new Date().toISOString(),
      };

      const finalMessages = [...newMessages, errorMsg];
      setMessages(finalMessages);

      // Update conversation
      const updatedConversations = conversations.map(c => {
        if (c.id === conversationId) {
          return { ...c, messages: finalMessages };
        }
        return c;
      });
      setConversations(updatedConversations);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="chat-page">
      {messages.length === 0 ? (
        <div className="chat-welcome">
          <div className="welcome-icon">🥗</div>
          <h1>Nexora Health Assistant</h1>
          <p>Ask me anything about food ingredients, nutrition, and health</p>
          <div className="suggested-prompts">
            <button 
              className="prompt-button"
              onClick={() => {
                setInput('What are the health benefits of eating more vegetables?');
                inputRef.current?.focus();
              }}
            >
              <span className="prompt-title">Health Benefits</span>
              <span className="prompt-text">Vegetables</span>
            </button>
            <button 
              className="prompt-button"
              onClick={() => {
                setInput('How do I read and understand food labels?');
                inputRef.current?.focus();
              }}
            >
              <span className="prompt-title">Food Labels</span>
              <span className="prompt-text">How to read them</span>
            </button>
            <button 
              className="prompt-button"
              onClick={() => {
                setInput('What ingredients should I avoid for a healthier diet?');
                inputRef.current?.focus();
              }}
            >
              <span className="prompt-title">Ingredient Guide</span>
              <span className="prompt-text">What to avoid</span>
            </button>
            <button 
              className="prompt-button"
              onClick={() => {
                setInput('Can you explain the nutritional value of different types of nuts?');
                inputRef.current?.focus();
              }}
            >
              <span className="prompt-title">Nutrition</span>
              <span className="prompt-text">Types of nuts</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="messages-container">
          {messages.map((msg) => (
            <div key={msg.id} className={`message-group message-${msg.type}`}>
              {msg.type !== 'user' && <div className="message-avatar">{msg.type === 'assistant' ? '🤖' : '⚠️'}</div>}
              <div className={`message-bubble ${msg.type}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="message-group message-assistant">
              <div className="message-avatar">🤖</div>
              <div className="message-bubble assistant loading-bubble">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}

      <form className="chat-input-form" onSubmit={handleSendMessage}>
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message Nexora..."
            disabled={loading}
            className="chat-input"
          />
          <button 
            type="submit" 
            disabled={loading || !input.trim()}
            className="send-button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.16151496 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.4429026 C0.994623095,2.0760421 0.837654326,3.16346272 1.15159189,3.94894957 L3.03521743,10.39 C3.03521743,10.5471 3.19218622,10.704198 3.50612381,10.704198 L16.6915026,11.4896849 C16.6915026,11.4896849 17.1624089,11.4896849 17.1624089,12.0274899 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

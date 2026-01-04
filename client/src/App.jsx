import { useState, useEffect } from "react";
import "./App.css";
import ChatPage from "./pages/ChatPage";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);

  // Initialize with one conversation on mount
  useEffect(() => {
    if (conversations.length === 0 && !currentConversation) {
      handleNewChat();
    }
  }, []);

  const handleNewChat = () => {
    const newConversation = {
      id: Date.now(),
      title: "New Conversation",
      messages: [],
      createdAt: new Date(),
    };
    setConversations(prev => [newConversation, ...prev]);
    setCurrentConversation(newConversation.id);
  };

  const handleSelectConversation = (id) => {
    setCurrentConversation(id);
  };

  const deleteConversation = (id) => {
    setConversations(conversations.filter(c => c.id !== id));
    if (currentConversation === id) {
      setCurrentConversation(conversations.length > 1 ? conversations[0].id : null);
    }
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <button 
            className="new-chat-btn"
            onClick={handleNewChat}
            title="Start a new conversation"
          >
            <span className="plus-icon">+</span>
            <span className="btn-text">New Chat</span>
          </button>
          <button 
            className="toggle-sidebar-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            title="Toggle sidebar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="conversations-list">
          {conversations.map(conv => (
            <div
              key={conv.id}
              className={`conversation-item ${currentConversation === conv.id ? 'active' : ''}`}
              onClick={() => handleSelectConversation(conv.id)}
            >
              <div className="conv-title">{conv.title}</div>
              <button 
                className="delete-conv-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteConversation(conv.id);
                }}
                title="Delete conversation"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="about-text">
            <p>🥗 Nexora</p>
            <span>AI Health Assistant</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {currentConversation ? (
          <ChatPage 
            conversationId={currentConversation}
            conversations={conversations}
            setConversations={setConversations}
            onNewChat={handleNewChat}
          />
        ) : (
          <div className="empty-state">
            <div className="empty-content">
              <div className="empty-icon">💬</div>
              <h1>Start a conversation</h1>
              <p>Click "New Chat" to begin</p>
              <button className="start-btn" onClick={handleNewChat}>
                New Chat
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

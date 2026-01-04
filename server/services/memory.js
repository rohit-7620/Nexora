import { v4 as uuidv4 } from 'uuid';

// In-memory conversation store (use database in production)
class ConversationStore {
  constructor() {
    this.conversations = new Map();
  }

  get(userId, conversationId = null) {
    const key = `${userId}:${conversationId || 'default'}`;
    
    if (!this.conversations.has(key)) {
      this.conversations.set(key, {
        id: conversationId || uuidv4(),
        userId,
        messages: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }

    return this.conversations.get(key);
  }

  save(userId, conversation) {
    const key = `${userId}:${conversation.id}`;
    conversation.updatedAt = new Date().toISOString();
    this.conversations.set(key, conversation);
    return conversation;
  }

  list(userId) {
    return Array.from(this.conversations.entries())
      .filter(([key]) => key.startsWith(`${userId}:`))
      .map(([, conversation]) => conversation);
  }

  clear(userId, conversationId = null) {
    if (conversationId) {
      this.conversations.delete(`${userId}:${conversationId}`);
    } else {
      // Clear all conversations for user
      Array.from(this.conversations.keys())
        .filter(key => key.startsWith(`${userId}:`))
        .forEach(key => this.conversations.delete(key));
    }
  }
}

export const conversationStore = new ConversationStore();

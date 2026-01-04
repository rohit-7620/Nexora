import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import chatRouter from './routes/chat.js';
import imageRouter from './routes/image.js';

dotenv.config();

// Validate API key after dotenv loads
if (!process.env.GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY not found in .env file');
  console.log('⚠️  The chat API will not work without a valid Gemini API key');
} else {
  console.log('✅ GEMINI_API_KEY loaded');
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Request logging
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.path} - Body:`, JSON.stringify(req.body).substring(0, 100));
  next();
});

// Routes
app.use('/api/chat', chatRouter);
app.use('/api/image', imageRouter);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Nexora Health Co-pilot server running on port ${PORT}`);
  console.log(`📍 API endpoints:`);
  console.log(`   - POST /api/chat - Send messages`);
  console.log(`   - POST /api/image - Analyze ingredient images`);
  console.log(`   - GET /api/health - Health check`);
});

# Quick Start Guide

## 1️⃣ Prerequisites Check

Make sure you have:
- **Node.js 18+** ([Download](https://nodejs.org/))
- **Google Gemini API Key** ([Get free API key](https://makersuite.google.com/app/apikey))

Verify Node.js:
```bash
node --version  # Should be v18+
npm --version   # Should be 8+
```

## 2️⃣ Setup (First Time Only)

### a) Clone/Navigate to project
```bash
cd c:\Users\ROHIT\OneDrive\Desktop\NEXORA
```

### b) Add your API Key
1. Open `.env` file (or create it if it doesn't exist)
2. Add your API key:
```env
GEMINI_API_KEY=your_api_key_here
PORT=3001
```
3. Get your API key from: https://makersuite.google.com/app/apikey

### c) Install Dependencies (one-time)
```bash
npm run setup
```

Or manually:
```bash
npm install
cd client && npm install && cd ..
```

## 3️⃣ Run the App

### Easy Way (Windows)
Double-click: **`run.bat`**

### Command Line
```bash
npm run dev:both
```

Or in separate terminals:
```bash
# Terminal 1: Start server
npm run dev

# Terminal 2: Start client
cd client
npm run dev
```

### Access the App
- Open browser: **http://localhost:5173**
- Server runs on: **http://localhost:3001**

## 4️⃣ Usage

1. Click "New Chat" to start a conversation
2. Ask questions about food, nutrition, ingredients
3. Conversations auto-save in the sidebar
4. Click any previous conversation to resume

## 5️⃣ Troubleshooting

### ❌ "Cannot find module" error
```bash
# Run from NEXORA folder
npm install
cd client && npm install && cd ..
```

### ❌ "GEMINI_API_KEY not found"
- Check `.env` file exists in root folder
- Make sure it has: `GEMINI_API_KEY=your_key`
- Restart the server

### ❌ "Cannot connect to server"
- Check server is running on port 3001
- See Terminal 1 output for errors
- Verify .env has valid API key

### ❌ Port 3001 already in use
- Change PORT in `.env` to something else (e.g., 3002)
- Restart server

## 📁 Project Files

```
NEXORA/
├── client/           # React frontend
│   ├── src/
│   │   ├── pages/ChatPage.jsx    # Chat UI
│   │   ├── App.jsx               # Main app
│   │   └── main.jsx              # Entry point
│   └── package.json
├── server/           # Express backend
│   ├── index.js      # Server
│   ├── routes/
│   │   └── chat.js   # Chat API
│   └── services/
│       └── memory.js # Conversations
├── .env              # Your config (CREATE THIS)
├── package.json
└── README.md
```

## 🎯 What to Expect

✅ Clean, modern ChatGPT-like interface  
✅ Sidebar with conversation history  
✅ Fast responses from Google Gemini AI  
✅ Automatic conversation saving  
✅ Mobile-friendly responsive design  

## 🆘 Need Help?

1. Check `.env` file has valid API key
2. Ensure Node.js 18+ is installed
3. Clear browser cache (Ctrl+Shift+Del)
4. Check both server and client are running
5. Look at terminal output for error messages

## 🚀 Ready?

```bash
npm run dev:both
```

Then open: http://localhost:5173

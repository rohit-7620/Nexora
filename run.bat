@echo off
REM Nexora Health Assistant - Startup Script

echo.
echo ============================================
echo  🥗 Nexora Health Assistant
echo ============================================
echo.

REM Check if .env file exists
if not exist .env (
    echo ❌ ERROR: .env file not found!
    echo.
    echo Create a .env file with:
    echo   GEMINI_API_KEY=your_api_key_here
    echo   PORT=3001
    echo.
    echo Get your API key from: https://makersuite.google.com/app/apikey
    pause
    exit /b 1
)

echo ✅ Checking Node.js...
node --version
if errorlevel 1 (
    echo ❌ Node.js not found! Please install Node.js 18+
    pause
    exit /b 1
)

echo.
echo ✅ Installing dependencies...
call npm install
if errorlevel 1 (
    echo ❌ Failed to install server dependencies
    pause
    exit /b 1
)

echo ✅ Installing client dependencies...
cd client
call npm install
if errorlevel 1 (
    echo ❌ Failed to install client dependencies
    pause
    exit /b 1
)
cd ..

echo.
echo ============================================
echo  Starting Nexora...
echo ============================================
echo.
echo 🚀 Starting both server and client...
echo    Server: http://localhost:3001
echo    Client: http://localhost:5173
echo.
echo Press Ctrl+C to stop
echo.

call npm run dev:both

pause

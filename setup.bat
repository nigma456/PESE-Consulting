@echo off
setlocal
title PESE Consulting - Setup Environment
cd /d "%~dp0"

echo ==================================================
echo   PESE Consulting Website - Environment Setup
echo ==================================================
echo.
echo   Project folder : %~dp0
echo.

rem ---- Check Node.js ----
echo   [1/2] Checking Node.js...
where node >nul 2>nul
if %errorlevel%==0 (
    echo        Node.js found.
    for /f "delims=" %%v in ('node -v') do set NODEV=%%v
    echo        Version : %NODEV%
) else (
    echo.
    echo   ERROR: Node.js is NOT installed.
    echo.
    echo   This project requires Node.js 22.12 or newer (Node 22 LTS recommended).
    echo   Please install Node.js from:  https://nodejs.org
    echo   Choose the "LTS" version, install it, then run this script again.
    echo.
    pause
    exit /b 1
)

rem ---- Check npm ----
echo.
echo   [2/2] Installing npm dependencies (node_modules)...
echo        This may take a few minutes on first run.
echo.
call npm install
if %errorlevel% neq 0 (
    echo.
    echo   ERROR: npm install failed. Check your network connection and retry.
    echo.
    pause
    exit /b 1
)

echo.
echo ==================================================
echo   Setup complete!
echo ==================================================
echo.
echo   Now double-click "start.bat" to run the website.
echo   Your browser will open automatically.
echo.
echo   Or run the command:  npm run dev
echo.
pause
endlocal
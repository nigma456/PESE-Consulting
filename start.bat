@echo off
setlocal
title PESE Consulting - Website Dev Server
cd /d "%~dp0"

echo ==================================================
echo   PESE Consulting Website - Development Server
echo ==================================================
echo.
echo   Project folder : %~dp0
echo   Starting Vite dev server...
echo   Your default browser should open automatically.
echo   (This window stays open while the server runs)
echo.
echo   If the browser does not open, look for a line like:
echo     "Local:   http://localhost:5175/"
echo   and open that URL manually.
echo   Press Ctrl+C in this window to stop the server.
echo.

echo   Launching npm run dev...
echo.
echo   (Browser opens automatically when the server is ready)
echo.

call npm run dev

echo.
echo ==================================================
echo   The server has been stopped.
echo ==================================================
echo.
echo   Press any key to close this window...
pause >nul
endlocal
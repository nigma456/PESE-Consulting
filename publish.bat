@echo off
setlocal
title PESE Consulting - Publish to Firebase
cd /d "%~dp0"

echo ==================================================
echo   PESE Consulting Website - Publish
echo ==================================================
echo.
echo   Project folder : %~dp0
echo   Target         : Firebase Hosting (pese-consulting-gx)
echo   Live site      : https://www.peseconsulting.com
echo.

rem ---- Proxy: required to reach Google APIs ----
set HTTPS_PROXY=http://127.0.0.1:7897
set HTTP_PROXY=http://127.0.0.1:7897
echo   Proxy          : http://127.0.0.1:7897
echo.

rem ---- Step 1: Build ----
echo   [1/3] Building production bundle...
echo.
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo   ERROR: Build failed. Fix the errors above and try again.
    echo.
    pause
    exit /b 1
)
echo.
echo        Build succeeded.
echo.

rem ---- Step 2: Deploy ----
echo   [2/3] Deploying to Firebase Hosting...
echo.
call firebase deploy --only hosting --project pese-consulting-gx
if %errorlevel% neq 0 (
    echo.
    echo   ERROR: Deploy failed.
    echo   Make sure you are logged in (run: firebase login) and have
    echo   permission to access the project "pese-consulting-gx".
    echo.
    pause
    exit /b 1
)
echo.
echo        Deploy succeeded.
echo.

rem ---- Step 3: Verify ----
echo   [3/3] Opening the live site...
echo.
start "" "https://www.peseconsulting.com"

echo.
echo ==================================================
echo   Publish complete!
echo   Live site: https://www.peseconsulting.com
echo   (If the old page still shows, wait 1-2 minutes
echo    and refresh with Ctrl+F5.)
echo ==================================================
echo.
pause
endlocal

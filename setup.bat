@echo off
echo ===================================================
echo     MediSaathi - Development Environment Setup
echo ===================================================
echo.
echo Installing dependencies...
call npm install
echo.
echo Starting Development Server...
call npm run dev
pause

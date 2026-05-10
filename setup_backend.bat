@echo off
echo ===================================================
echo     MediSaathi - Backend Environment Setup
echo ===================================================
echo.
cd backend
echo Installing Backend dependencies...
call npm install
echo.
echo Starting Backend Server...
call npm run dev
pause

@echo off
chcp 65001 >nul
title Enologo - Simulador de Carrera Vitivinicola
cd /d "%~dp0"

echo =======================================================
echo    ENOLOGO: Simulador de Carrera Vitivinicola
echo =======================================================
echo Iniciando el juego...

where python >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Python detectado. Iniciando servidor web local...
    python server.py
) else (
    echo [AVISO] Python no encontrado en PATH. Abriendo directamente en el navegador...
    start "" "%~dp0index.html"
)

pause

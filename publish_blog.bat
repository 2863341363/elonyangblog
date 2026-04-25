@echo off
chcp 65001 >nul
cd /d "%~dp0"
python "%~dp0publish_blog.py"
if errorlevel 1 pause

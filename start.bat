@ECHO OFF
echo I will start NODEJS server for this project ...
WHERE node
IF %ERRORLEVEL% NEQ 0 (
    echo nodejs is not installed on this system!
) else (
    node server-dev.js
    browser.bat
)
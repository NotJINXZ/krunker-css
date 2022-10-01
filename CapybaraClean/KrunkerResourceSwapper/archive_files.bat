@echo off
echo Deleting Old Zip...
del Capybara-CSS.zip
echo Done.
echo.
echo Archiving Contents...
tar.exe -a -c -f Capybara-CSS.zip css init.js manifest.json
echo Done.
echo.
timeout /t 5 /nobreak
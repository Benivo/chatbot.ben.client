git add *
git commit -m "automatic push"
git push
del ..\benivo.github.io\*
xcopy .\dist\* ..\benivo.github.io\*
cd ..
cd benivo.github.io
git add *
git commit -m "automatic push"
git push
pause
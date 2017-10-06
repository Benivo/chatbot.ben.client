git add *
git commit -m "automatic push"
git push
del ..\benivo.github.io\*
del ..\benivo.github.io\assets
xcopy .\dist\* ..\benivo.github.io\*
xcopy .\dist\assets\* ..\benivo.github.io\assets\*

cd ..
cd benivo.github.io
git add *
git commit -m "release push"
git push
pause
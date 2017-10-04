git add *
git commit -m "automatic push"
git push
ng build --prod
Remove-Item ..\benivo.github.io\*
xcopy .\dist\* ..\benivo.github.io\*
cd ..
cd benivo.github.io
git add *
git commit -m "automatic push"
git push
pause
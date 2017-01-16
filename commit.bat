@echo on
set p1 = %1

rem commiting %1

git add --all
git commit -m %1
rem commited

git push -u origin master
rem pushed




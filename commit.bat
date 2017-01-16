@echo on
set p1 = %1

rem commiting p1

git add --all
git commit -m p1
rem commited

git push -u origin master
rem pushed




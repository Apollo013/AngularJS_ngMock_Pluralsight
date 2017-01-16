@echo on

rem commiting %1
git add --all

git commit -m %1
rem commited %1

git push -u origin master
rem pushed %1




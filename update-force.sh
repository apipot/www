#!/bin/bash
echo "I will update git repository ..."
#git checkout master
#git fetch --all
#git reset --hard origin/master
git reset --hard HEAD
git pull
# give rights to execute
chmod u+r+x *.sh
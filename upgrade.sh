#!/bin/bash
echo "I can upgrade the linux os, use: apt upgrade"
apt list --upgradable
#apt upgrade
echo "I will upgrade the nodejs application ..."
#npm install -g npm
npm --version
npm i npm@latest -g
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
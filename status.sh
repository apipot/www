#!/bin/bash
echo "status of node:"
nodejs -v
#nodejs --version
npm -v
node --version
which node

echo "status of network:"
netstat -lpn | grep :'80'

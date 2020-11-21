#!/bin/bash
echo "I will stop the nodejs application ..."
pkill -f node
#pkill -f nodejs
#To kill all Node Processes
kill $(ps aux | grep '[n]ode' | awk '{print $2}')
#To kill all PHP Processes
#kill $(ps aux | grep '[p]hp' | awk '{print $2}')
##To kill all Nginx Processes
#kill $(ps aux | grep '[n]ginx' | awk '{print $2}')
#To kill all MySQL Processes
#kill $(ps aux | grep '[m]ysql' | awk '{print $2}')
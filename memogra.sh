#!/bin/bash
#
# An init.d script for running a Node.js process as a service using iptables, forever and bouncy
# Reference:
# 1- https://github.com/nodejitsu/forever
# 2- https://www.exratione.com/2013/02/nodejs-and-forever-as-a-service-simple-upstart-and-init-scripts-for-ubuntu/

source /home/kle/.nvm/nvm.sh
NAME="Script for all NodeJS apps"
NVM_VERSION="v0.10.31"
NVM_CURRENT=$(nvm current)
####NVM_VERSION=$(grep -o "v.*$" <<<"$NVM_CURRENT")

start() {
    echo "Starting $NAME"

    ##### First, route all traffic to 80 to 8000 which is where bouncy runs
    sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8000

    ##### Second, run bouncy at port 8000 which routes traffic according to routes.json in bouncy directory
    $NVM_DIR/$NVM_VERSION/bin/forever start --spinSleepTime 10000 $NVM_DIR/$NVM_VERSION/bin/bouncy /home/kle/projects/bouncy/routes.json 8000

    ##### Run application1 on port 5000
    cd /home/kle/projects/app1
    $NVM_DIR/$NVM_VERSION/bin/forever start server.js

    ##### Run application2 on port 5001
    cd /home/kle/projects/app2
    $NVM_DIR/$NVM_VERSION/bin/forever start server.js

    ##### Set current directory back to ~
    cd ~
    RETVAL=$?
}

stop() {
    echo "Shutting down $NAME"

    ##### Undo line 18 above
    sudo iptables -t nat -D PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8000

    ##### stop all forever processes
    $NVM_DIR/$NVM_VERSION/bin/forever stopall

    RETVAL=$?
}

restart() {
    stop
    start
}

status() {
    echo "$NAME is running."
    $NVM_DIR/$NVM_VERSION/bin/forever list
    RETVAL=$?
}

case "$1" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    status)
        status
        ;;
    restart)
        restart
        ;;
    *)
        echo "Usage: {start|stop|status|restart}"
        exit 1
        ;;
esac
exit $RETVAL
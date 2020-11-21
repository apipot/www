#!/bin/bash
./status.sh & ./stop.sh & ./update.sh & ./start.sh & ./status.sh && echo "Successfully restarted"

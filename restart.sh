#!/bin/bash
./status.sh & ./stop.sh & ./start.sh & ./status.sh && echo "Successfully restarted"

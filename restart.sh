#!/bin/bash
./status.sh
./stop.sh
./update-force.sh
./start.sh
./status.sh && echo "Successfully restarted"

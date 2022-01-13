#!/bin/bash

LOG_FILE=logs/react_logs.log

date --rfc-2822 >> $LOG_FILE; /usr/bin/serve -s build -l 8000 2>&1 | tee -a -i $LOG_FILE

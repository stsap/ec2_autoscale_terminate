#!/bin/bash

export AWS_ACCESS_KEY=""
export AWS_SECRET_ACCESS_KEY=""
export AWS_REGION=""
export AWS_AUTOSCALING_GROUP_NAMe=""
source /root/.nvm/nvm.sh
$NVM_BIN/node /usr/local/src/scaleBack/index.js

#!/bin/bash
SERVICE=meteorApp
CHECK=$0

RESULT=`ps ax | sed -n /${SERVICE}/p | grep -v sed | grep -v ${CHECK}`

if [ "${#RESULT}" -eq 0 ]; then

cd ${OPENSHIFT_REPO_DIR}
killall node
nohup node meteorApp.js 2>&1 >> $OPENSHIFT_DATA_DIR/node_meteorApp_cron_fired.log &
exit 0
fi

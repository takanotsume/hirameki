#!/bin/sh
cd ../
# Start Server
node server/server.js &
# Start Client
node server-www.js &
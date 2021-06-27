#!/bin/sh

echo "Build"
yarn run build

echo "Watching changes"
yarn run watch:build &

echo "Start server"
nodemon -e js build/main/index.js

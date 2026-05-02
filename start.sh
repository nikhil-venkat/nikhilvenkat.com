#!/bin/bash
set -e

echo "Building shared package..."
cd /home/runner/workspace/packages/shared
/home/runner/workspace/node_modules/.bin/tsc -p tsconfig.json

echo "Linking shared package..."
mkdir -p /home/runner/workspace/packages/app/node_modules
ln -sf /home/runner/workspace/packages/shared /home/runner/workspace/packages/app/node_modules/shared

echo "Starting React dev server..."
cd /home/runner/workspace/packages/app
PORT=5000 HOST=0.0.0.0 BROWSER=none NODE_OPTIONS=--openssl-legacy-provider /home/runner/workspace/node_modules/.bin/react-scripts start

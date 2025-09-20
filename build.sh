#!/bin/bash
set -e

echo "🧹 Cleaning previous builds..."
rm -rf node_modules packages/*/node_modules packages/*/dist

echo "📦 Installing dependencies..."
yarn install

echo "🔗 Linking packages..."
cd packages/shared
yarn build
cd ../app
yarn build

echo "✅ Build completed successfully!"

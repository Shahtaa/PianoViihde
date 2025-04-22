#!/bin/bash

# 1. Перейти в папку проекта
cd "$(dirname "$0")"

echo "📦 Building Vite project..."
npm run build

# 2. Удалить старые файлы с сервера
echo "🧹 Cleaning server build folder..."
sudo rm -rf /var/www/frontend/*

# 3. Скопировать новую сборку
echo "🚀 Copying new build to /var/www/frontend/"
sudo cp -r dist/* /var/www/frontend/

echo "✅ Deployment complete!"

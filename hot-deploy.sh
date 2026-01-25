#!/bin/bash

# FRONTEND
echo "Starting frontend with hot reload..."
cd /var/www/tutor-log/frontend
npm install

# Use Vite/React/Angular dev server or similar for hot reload
npm run dev &
FRONTEND_PID=$!

# BACKEND
echo "Starting backend with hot reload..."
cd /var/www/tutor-log/backend
npm install

# Use nodemon for hot reload on backend
npx nodemon --watch src --ext ts,js --exec "ts-node src/main.ts" &
BACKEND_PID=$!

echo "Frontend running on PID $FRONTEND_PID"
echo "Backend running on PID $BACKEND_PID"

# Keep script running
echo "Press CTRL+C to stop both services"
trap "echo 'Stopping services...'; kill $FRONTEND_PID $BACKEND_PID; exit 0" SIGINT
wait

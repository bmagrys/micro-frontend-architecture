#!/usr/bin/env sh
npm run --prefix micro-frontend-envelope bundle:aws
npm run --prefix micro-frontend-app-orders build:aws
rm -rf ./static/
cp -R micro-frontend-envelope/dist/ ./static/
cp -R micro-frontend-app-orders/dist/micro-frontend-app-orders ./static/
aws s3 rm s3://$1 --recursive
aws s3 sync ./static/ s3://$1/

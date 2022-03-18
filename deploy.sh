#!/usr/bin/env sh

npm run build

cd dist

git init
git add .
git commit -m "New Deployment"
git push -f git@github.com:ducduc222/todolist.git master:review-page
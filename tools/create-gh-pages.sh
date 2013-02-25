#!/bin/sh
cd ..
git checkout -b gh-pages
git rm -rf .
git add .
git commit -am "reset branch"
git push origin gh-pages
git checkout master
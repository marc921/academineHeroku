#!/bin/bash
# Small script to quicken commiting on master branch. Do not use if you don't know what you are doing !

git add .
git commit -m "$1"
git push origin master
git push heroku master

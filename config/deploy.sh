#!/bin/bash

if [[ $TRAVIS_BRANCH == 'prod' ]] ; then
  git init

  git config user.name "Travis CI"
  git config user.email "arnarp@gmail.com"

  git add -f build/*
  git add -f ./package.json
  git status
  git commit -m "Deploy"

  # We redirect any output to
  # /dev/null to hide any sensitive credential data that might otherwise be exposed.
  git push --force "https://${AZURE_WA_USERNAME}:${AZURE_WA_PASSWORD}@${GIT_TARGET}" # master:master # > /dev/null 2>&1
else
  echo 'Invalid branch. You can only deploy from master.'
  exit 1
fi

#!/bin/sh

folder="$(dirname "$0")"
cd "$folder"

PACKAGE_NAME=$(cat package.json \
    | grep name \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g')

echo "****** Generando nueva versión de: $PACKAGE_NAME ******"
rimraf lib
rimraf package-lock.json

ncu -u
npm i

npm version patch --no-git-tag-version
npm publish

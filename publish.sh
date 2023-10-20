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

# Verificar si hay actualizaciones disponibles para las dependencias
if [ -n "$(ncu -g)" ]; then
    ncu -u
    npm i
else
    echo "Todas las dependencias están actualizadas, no es necesario ejecutar ncu -u."
fi

npm version patch --no-git-tag-version
npm publish

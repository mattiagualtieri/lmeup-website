#!/bin/sh

set -e

git checkout dist
npm run build
git --work-tree dist add --all
git --work-tree dist commit -m 'Deploy'
git push origin HEAD:dist --force
rm -r dist
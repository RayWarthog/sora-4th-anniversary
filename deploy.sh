#!/usr/bin/env sh

# abort on errors

set -e

# build

npm run build

# navigate into the build output directory

cd dist

# if you are deploying to a custom domain

# echo '' > CNAME

git init

git branch -m gh-pages

git remote add origin https://github.com/RayWarthog/sora-4th-anniversary.git

git add -A

git commit -m 'deployment'

git push -f -u origin gh-pages

cd -

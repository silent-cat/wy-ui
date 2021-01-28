rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin git@github.com:silent-cat/wy-ui-website.git &&
git push -f -u origin main &&
cd - &&
echo https://silent-cat.github.io/wy-ui-website/
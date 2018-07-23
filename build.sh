rm -rf dist
cp ./config/build/* ./
./node_modules/.bin/tsc
./node_modules/.bin/tsc -p tsconfig_js.json
cp src/*.d.ts dist/

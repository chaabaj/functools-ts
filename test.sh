
cp ./config/test/* ./
./node_modules/.bin/mocha --require ts-node/register ./test/*.spec.ts

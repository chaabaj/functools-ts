export SHELLOPTS
set -o igncr

cp ./config/test/* ./
npm run test
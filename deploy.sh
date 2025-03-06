apt update
apt install nodejs npm -y
npm install -g pm2

git clone repo

cd repo

npm i

node server.js

# Init pm2

pm2 start server.js --name "app"

pm2 stop app

pm2 delete app # stop and delete

pm2 status # list all apps
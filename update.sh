cd ../../../PixelRealEstate-Server
git pull origin master
cd ../public_html/canvas/server
cp -a ../../../PixelRealEstate-Server/* ./
npm install
truffle migrate
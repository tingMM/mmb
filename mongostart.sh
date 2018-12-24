cd ./mongodb;

# 该表暂未使用
mongoimport -d manmanmai -c productList --file productlist.json --type json;

mongoimport -d manmanmai -c productlists --file productListdb.json --type json;
mongoimport -d manmanmai -c inlanddiscounts --file inlandDiscountdb.json --type json;
mongoimport -d manmanmai -c sitenavs --file sitenavdb.json --type json;
mongoimport -d manmanmai -c gsshopareas --file gsShopAreadb.json --type json;
mongoimport -d manmanmai -c baicaijiatitles --file baicaijiaTitledb.json --type json;
mongoimport -d manmanmai -c brands --file branddb.json --type json;
mongoimport -d manmanmai -c couponproducts --file couponProductdb.json --type json;
mongoimport -d manmanmai -c categories --file category.json --type json;
mongoimport -d manmanmai -c gstitles --file gsTitledb.json --type json;
mongoimport -d manmanmai -c baicaijiaproducts --file baicaijiaProductdb.json --type json;
mongoimport -d manmanmai -c titles --file title.json --type json;
mongoimport -d manmanmai -c moneyctrls --file moneyctrldb.json --type json;
mongoimport -d manmanmai -c gsproducts --file gsproductdb.json --type json;
mongoimport -d manmanmai -c productcoms --file productComdb.json --type json;
mongoimport -d manmanmai -c products --file productdb.json --type json;
mongoimport -d manmanmai -c brandtitles --file brandTitledb.json --type json;
mongoimport -d manmanmai -c coupons --file coupondb.json --type json;
mongoimport -d manmanmai -c indexmenus --file indexMenu.json --type json;

rm -rf mongod.lock;

mongod --dbpath data;

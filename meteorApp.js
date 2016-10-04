#!/bin/env node
var fs = require('fs')

/// Setup env
process.env.ROOT_URL = "http://"+process.env.OPENSHIFT_APP_DNS || "http://localhost";
//process.env.MONGO_URL = process.env.OPENSHIFT_MONGODB_DB_URL || "PLEASE_PROVIDE_A_MONGO_URL";
//process.env.MAIL_URL = optional MAIL_URL and other env variables may be setup here
process.env.PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
process.env.BIND_IP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
process.env.DDP_DEFAULT_CONNECTION_URL = 'http://' + process.env.OPENSHIFT_APP_DNS + ':8000'
//for ssl
//process.env.DDP_DEFAULT_CONNECTION_URL = 'https://' + process.env.OPENSHIFT_APP_DNS + ':8443'

// Show connection details on startup
console.log("*********** Meteor Environment ************");
console.log("MONGO_URL IS: " + process.env.MONGO_URL);
console.log("ROOT_URL IS: " + process.env.ROOT_URL);
console.log("PORT: " + process.env.PORT);
console.log("BIND_IP: " + process.env.BIND_IP);
console.log("DDP_URL: " + process.env.DDP_DEFAULT_CONNECTION_URL);

fs.stat('main.js', function(err, stat) {
if(!err)
{
  // Start meteor server
  console.log("************ Ready to START METEOR SERVER  ************");
  require('./main.js');
}else{
  console.log("************ Starting Demo NodeJS SERVER  ************");
  require('./app.js');
}
});

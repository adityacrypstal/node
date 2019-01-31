console.log("Starting app...!");
const os = require('os');
const fs = require('fs');
const myname = require('./2.js');
console.log(myname.createName());
var user = os.userInfo();
var datetime = new Date();
fs.appendFile('log.txt', `\nUsername:${user.username}...................${datetime}`);
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var aws = require('aws-sdk');
var router = express.Router();
var multer = require('multer');
var multerS3 = require('multer-s3');
var app = express();
var fs = require('fs');
var mysql = require('mysql');
var passwordHash = require('password-hash');
var passwordHash = require('./node_modules/password-hash/lib/password-hash');
var mongoose = require('mongoose');
var assert = require('assert');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/hari');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Twilio Credentials
var accountSid = 'AC3631741aee52e81fe69945de20119fdd';
var authToken = '75d168efa74068ac8c0e149ded3f1f59';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

var otp = Math.floor(100000 + Math.random() * 900000);

client.messages.create({
    to: "+919492298412",
    from: "+19493834011",
    body: "Hi, " +otp+ " is your NETSECURE code for your MUSIC MOCKTAIL login. Do not share with anyone. Have a Good Day..."
}, function(err, message) {
    if(err) throw err;
    console.log("message has been delivered");
});


























app.listen(4001,function(){
    console.log("server listening on port:4001");
});

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
var Client = require('node-rest-client').Client;
var client = new Client();
var _        = require('underscore');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var Facebook = require('facebook-node-sdk');
var facebook = new Facebook({ appID: '139510823464196', secret: 'f961f06473c114021ed8507fed555f27' });
// facebook.api('/amachang', function(err, data) {
//     console.log(data); // => { id: ... }
// });

// var app = express.createServer();
//
// app.configure(function () {
//     app.use(express.bodyParser());
//     app.use(express.cookieParser());
//     app.use(express.session({ secret: 'foo bar' }));
//     app.use(Facebook.middleware({ appId: '139510823464196', secret: 'f961f06473c114021ed8507fed555f27' }));
// });

app.get('/', Facebook.loginRequired(), function (req, res) {
    req.facebook.api('/me', function(err, user) {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello, ' + user.name + '!');
    });
});

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/hari');



app.get('/home',function(req,res){
    res.sendFile(__dirname + "/sample.html");
});

app.listen(4001,function(){
    console.log("server listening on port:4001");

});
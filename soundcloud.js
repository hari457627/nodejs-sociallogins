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
var SoundCloudAudio = require('soundcloud-audio');
var scPlayer = new SoundCloudAudio('YOUR_CLIENT_ID');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/hari');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendFile(__dirname + "/sample.html");
});
























app.listen(4001,function(){
    console.log("server listening on port:4001");
});

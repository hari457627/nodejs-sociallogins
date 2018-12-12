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

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/hari');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var youtube_api = "AIzaSyBOiWP_S4hRJag9yu8zq-2xc4v2VGsBmL8";
var channelId = "UCVTlvUkGslCV_h-nSAId8Sw";

app.get('/',function(req,res){
    res.sendFile(__dirname + "/sample.html");
});

// client.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&maxResults=50&channelId=UCVTlvUkGslCV_h-nSAId8Sw&key="+youtube_api, function (data, response, err) {
//     if(data){
//
//     }
//     if(err) throw err;
//
// });

client.get("https://www.googleapis.com/youtube/v3/search?key="+youtube_api+"&channelId="+channelId+"&part=snippet,id&order=date&maxResults=20", function (data, response, err) {
    if(data){
        console.log(data.items);
    }
    if(err) throw err;

});

// client.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId="+playlists[j]+"&key="+youtube_api, function(data, response,err){
//     if(data){
//
//     }
//
// });

app.listen(4001,function(){
    console.log("server listening on port:4001");

});

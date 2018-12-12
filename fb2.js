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

var Facebook = require('facebook-node-sdk');
var facebook = new Facebook({ appID: '139510823464196', secret: 'f961f06473c114021ed8507fed555f27' });

// var FB = require('facebook-node');
// var facebook = new FB({ appID: '139510823464196', secret: 'f961f06473c114021ed8507fed555f27' });
// FB.setApiVersion("v2.2");
// FB.setAccessToken('EAABZB4mUTLQQBABqAJJrVWLjuLO9fEihKHYJwlZCQwZArovQUEzxPqxrjCAIttjHL0OVlwmpky3I8fyLFWlQw56lmHk2bS5oh1EZCsZAwwD7AhGLZBJavn9UhHqYfeeiSigAaaFPtUU5drseLoK0J29xtIuUYQIRDg1sDexM3C0KwzuFOQsTWvAZBbprTuDedoYZAQGWRGuYVDRrKKBNld7B8yQLKJVIRvOtIyZAXH6CXb21MRqZCIqV2p');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// FB.api('/me', function (res) {
//     if(!res || res.error) {
//         console.log(!res ? 'error occurred' : res.error);
//         return;
//     }
//     console.log(res.id);
//     console.log(res.name);
// });

// FB.api('/', { fields: ['110898069677003', 'Linda Albbgjdcacgdj Thurnman'] }, function (res) {
//     if(!res || res.error) {
//         console.log(!res ? 'error occurred' : res.error);
//         return;
//     }
//     console.log(res.id);
//     console.log(res.name);
// });

facebook.getLoginStatus(function(response) {
    if (response.status === 'connected') {
        var accessToken = response.authResponse.accessToken;
    }
    console.log(accessToken);
} );
// app.get('/me', function (req, res) {
//
// });

// app.get('/me', function (req, res) {
//     FB.api('/me', function(err, user) {
//         res.writeHead(200, {'Content-Type': 'text/plain'});
//         console.log(res);
//     });
// });

app.listen(4001,function(){
    console.log("server listening on port:4001");

});

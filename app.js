/* jslint node:true */
'use strict';

// Express as webserver, and body-parser as our
// middleware to parse body and url querys
var express = require('express'),
    bodyParser = require('body-parser');

var app = exports.app = express(), // main server function
    router = require('./router.js').http, // routes handler

    config = {
        port: 8080
    };

// Configure engine for views route on the project root
app.set('views', __dirname + '/');

// Will be using ejs render engine to write HTML
app.engine('html', require('ejs').renderFile);

// to support JSON-encoded bodies
app.use(bodyParser.json());

// to support URL-encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

// Load http router
app.use(router());

// Launch server by doing app listen on config.port
var server = app.listen(config.port, function () {
    var port = server.address().port;
    console.log('Express server listening on port:', port);
});
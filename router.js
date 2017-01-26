/* jslint node: true */
'use strict';

var express = require('express'),
    router = express.Router();

module.exports = {
    http: function () {

        // Content served by static middleware
        router.use(express.static('./public'));

        // Custom route
        router.get('/hello', function (req, res) {
            res.status(200).send('Hello world');
        });

        return router;
    }
};
/**
 * Created by dseet on 7/8/2014.
 */
var express = require('express');

var app = new express();
app.use(function (req, res, next) {
    console.log('processing request for "' + req.url + '"....');
    next();
});

app.use(function (req, res, next) {
    console.log('terminating request');
    res.send('thanks for playing');
    // note that we do NOT call next() here...this terminates the request
});

app.use(function (req, res, next) {
    console.log("whoops, i\'ll never get called!");
});

app.listen(3000, function() {
    console.log('listening on 3000');
});
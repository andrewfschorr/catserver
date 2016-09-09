// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.get('/hw', function(req, res) {
    res.send('H3770 W04Ld');
});

app.listen(8080);
console.log('8080 is the magic port');


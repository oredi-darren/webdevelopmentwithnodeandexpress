/**
 * Created by dseet on 7/3/2014.
 */
var express = require('express');
var handlebars = require('express3-handlebars');
var fortune = require('./lib/fortune.js');

var app = express();

// set up handlebars view engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
    next();
});

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/about', function (req, res) {
    res.render('about',
        {
            fortune: fortune.getFortune(),
            pageTestScript: '/qa/tests-about.js'
        });
});

app.get('/tours/hood-river', function (req, res) {
    res.render('tours/hood-river');
});

app.get('/tours/oregon-coast', function (req, res) {
    res.render('tours/oregon-coast');
});

app.get('/tours/request-group-rate', function (req, res) {
    res.render('tours/request-group-rate');
});

// 404 catch-all handler (middleware)
app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

// 500 error handler (middleware)
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

var port = app.get('port');
app.listen(port, function () {
    console.log('Express stated on http://localhost:' + port + '; press Ctrl-C to terminate.');
});
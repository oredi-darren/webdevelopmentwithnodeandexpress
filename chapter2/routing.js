/**
 * Created by dseet on 7/2/2014.
 */
var http = require('http');

http.createServer(function (req, res) {
    // normalize url by removing querystring, optional
    // trailing slash, and making it lowercase
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Homepage');
            break;
        case '/about':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About');
            break;
        default:
            res.end('Not found');
            break;
    }

}).listen(3000);

console.log('Server started on location:3000; press Ctrl-C to terminate....');


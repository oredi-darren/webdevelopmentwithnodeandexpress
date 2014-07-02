/**
 * Created by dseet on 7/2/2014.
 */
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello world!');
}).listen(3000);

console.log('Server started on location:3000; press Ctrl-C to terminate....');

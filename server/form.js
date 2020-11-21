module.exports = function (application, domain = 'localhost', port = 3000, public_src = "./public" ) {

    var http = require('http');

    var finalhandler = require('finalhandler');
    var serveStatic = require('serve-static');

    var serve = serveStatic(public_src);

    var app = http.createServer(function (req, res) {
        var done = finalhandler(req, res);
        serve(req, res, done);
    });

    var url = 'http://' + domain + ':' + port;
    app.listen(port, () => console.log(application + ' is listening on: ' + url));

    return app;

};

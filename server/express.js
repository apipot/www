module.exports = function (application, domain = 'localhost', port = 3000, public_src = "./") {

    const express = require('express');

    const app = express();
    port = process.env.PORT || port;

    // NEW - Add CORS headers - see https://enable-cors.org/server_expressjs.html
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    });


    app.get('/', (req, res) => {
        var host = req.get('host');
        var origin = req.get('origin');
        //var origin = req.headers.origin;
        var userIP = req.socket.remoteAddress;
        res.redirect("/index.html?host=" + host + "&origin=" + origin + "&ip=" + userIP);
        res.send('An alligator approaches!');
    });

    app.use(express.static(public_src));

    // API endpoint
    app.get("/api/ping", (req, res) => {
        res.send({
            msg: "Hello, World"
        });
    });

    // API endpoint


    //var host = req.get('host');
    //var origin = req.get('origin');

    app.get("/api/url", (req, res) => {
        var host = req.headers.host;
        var origin = req.headers.origin;

        res.send({
            host: host,
            origin: origin
        });
    });



    // app.listen(PORT, () => console.log(`listening on ${PORT}`));
    var url = 'http://' + domain + ':' + port;
    app.listen(port, () => console.log(application + ' is listening on: ' + url));

    return app;
};

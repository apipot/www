module.exports = function (application, domain = 'localhost', port = 3000, public_src = "./") {

    // Library
    const express = require('express')
    const wildcardSubdomains = require('wildcard-subdomains')

    // Config
    port = process.env.PORT || port;
    const url = 'http://' + domain + ':' + port;

    // Define Routing for App
    const app = express()

    app.use(wildcardSubdomains())

    /* www is not using
    app.get('/', function (req, res) {
        res.send('Visit <a href="http://foo.apipot.com:80">http://foo.apipot.com:80</a> (points back to localhost)')
    })
*/

    // user/project/path
    app.get('/_sub/:user/:project/*', function (req, res) {
        res.end(
            'user: ' +
            req.params.user +
            '\n' +
            'user: ' +
            req.params.project +
            '\n' +
            'path: ' +
            req.originalUrl +
            '\n' +
            'Query string: ' +
            JSON.stringify(req.query)
        )
    })

    // Generous matching
    app.get('/_sub/:firstSubdomain/*', function (req, res) {
        res.end(
            'First Subdomain: ' +
            req.params.firstSubdomain +
            '\n' +
            'Original Url: ' +
            req.originalUrl +
            '\n' +
            'New Url: ' +
            req.url +
            '\n' +
            'Query string: ' +
            JSON.stringify(req.query)
        )
    })


    // Start App
    app.listen(port, () => console.log(application + ' is listening on: ' + url));

    // Info
    console.log('Example started on port 80')
    console.log('============================')
    console.log('To test subdomain routing, visit these urls in your browser:')
    console.log('http://test.apipot.com:80/')
    console.log('http://another.test.apipot.com:80/')
}
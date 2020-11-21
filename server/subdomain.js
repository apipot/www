var express = require('express')
var app = express()
var wildcardSubdomains = require('wildcard-subdomains')

app.use(wildcardSubdomains())

app.get('/', function (req, res) {
    res.send('Visit <a href="http://foo.apipot.com:80">http://foo.apipot.com:80</a> (points back to localhost)')
})

app.get('/_sub/bar/foo', function (req, res) {
    res.end(
        'Subdomains: ' +
        JSON.stringify(req.subdomains) +
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

app.listen(80)
console.log('Example started on port 80')
console.log('============================')
console.log('To test subdomain routing, visit these urls in your browser:')
console.log('http://test.apipot.com:80/')
console.log('http://another.test.apipot.com:80/')
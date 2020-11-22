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
    // list.view.apipot.com/README.md
    // http://list.view.apipot.com/README.md
    // ls repo/static/view/list
    // app.use('/_sub/view/list/*', express.static(path.join(__dirname, 'repo/static/view/list')))
    app.use('/_sub/view/list', express.static('repo/static/view/list'))

    // user/project/path
    app.get('/_sub/:group/:project/*', function (req, res) {
        //public_src = req.params.group + "/" + req.params.project;
        // app.use(express.static(public_src));
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
            group: req.params.group,
            project: req.params.project,

        }))
        /*
        res.end(
            'group: ' +
            req.params.group +
            ';\n' +
            'project: ' +
            req.params.project +
            ';\n' +
            'path: ' +
            req.originalUrl +
            ';\n' +
            'Query string: ' +
            JSON.stringify(req.query)
        )
//         */
    });

    // Generous matching
    app.get('/_sub/:firstSubdomain/*', function (req, res) {
        res.end(
            'First Subdomain: ' +
            req.params.firstSubdomain +
            ';\n' +
            'Original Url: ' +
            req.originalUrl +
            ';\n' +
            'New Url: ' +
            req.url +
            ';\n' +
            'Query string: ' +
            JSON.stringify(req.query)
        )
    })

    app.get('/admin/username/:username', function (req, res) {

    })

    app.get('/admin/group/:group', function (req, res) {

    })

    app.get('/admin/group/:group/project/:project', function (req, res) {

    })

    app.put('/admin/group/:group/project/:project', function (req, res) {

    })

    app.post('/admin/group/:group/project/:project', function (req, res) {

    })

    app.delete('/admin/group/:group/project/:project', function (req, res) {

    })

    // Start App
    app.listen(port, () => console.log(application + ' is listening on: ' + url));

    // Info
    console.log('Example started on port ' + port)
    console.log('============================')
    console.log('To test subdomain routing, visit these urls in your browser:')
    console.log("http://test.apipot.com:{port}/")
    console.log("http://another.test.apipot.com:$port/")
}
module.exports = function (application, domain = 'localhost', port = 3000, public_src = "./") {

    var EXTENSION = '.git'
    var FILENAME = '.git'
    var fs = require('fs');
    var path = require('path');
    var walk = function (dir, done) {
        var results = [];
        fs.readdir(dir, function (err, list) {
            if (err) return done(err);
            var i = 0;
            (function next() {
                var file = list[i++];
                if (!file) return done(null, results);

                var file_name = file;

                // FILENAME = .git
                // if (file.indexOf(FILENAME) !== -1) return done(null, results);

                file = path.resolve(dir, file);

                // EXTENSION
                // if (path.extname(file).toLowerCase() === EXTENSION) return done(null, results);

                fs.stat(file, function (err, stat) {
                    if (stat && stat.isDirectory()) {
                        // filter FILENAME = .git
                        if (file.indexOf(FILENAME) !== -1) next();

                        walk(file_name, function (err, res) {
                            results = results.concat(res);
                            next();
                        });
                    } else {
                        if (file_name.indexOf(FILENAME) === -1) {
                            results.push(file_name);
                            // results.push(file);
                        }
                        next();
                    }
                });
            })();
        });
    };
    // https://stackoverflow.com/questions/5827612/node-js-fs-readdir-recursive-directory-search

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
        public_src = process.env.HOME + "/" + "www/" + "repo/static/" + req.params.group + "/" + req.params.project;
        // app.use(express.static(public_src));
        res.setHeader('Content-Type', 'application/json');

        // res.end(JSON.stringify({
        //     group: req.params.group,
        //     project: req.params.project,
        //     path: public_src,
        //     files: process.env.HOME,
        // }))
        var url_list = [];

        walk(public_src, function (err, results) {
            if (err) throw err;
            // console.log(results);
            var module = req.params.project + "." + req.params.group + ".apipot.com"
            var url = "http://" + module + "/"

            for (const result of results) {
                url_list.push(url + result);
            }
            res.end(JSON.stringify({
                group: req.params.group,
                project: req.params.project,
                module: module,
                url: url,
                path: public_src,
                file_list: results,
                url_list: url_list
            }))
        });
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

    // SSL
    app.use(express.static(__dirname, { dotfiles: 'allow' } ));

    // Start App
    app.listen(port, () => console.log(application + ' is listening on: ' + url));

    // Info
    console.log('Example started on port ' + port)
    console.log('============================')
    console.log('To test subdomain routing, visit these urls in your browser:')
    console.log("http://test.apipot.com:{port}/")
    console.log("http://another.test.apipot.com:$port/")
}
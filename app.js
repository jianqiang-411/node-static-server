
const http = require('http');
const url = require('url');
const route = require('./module/route');


http.createServer((req, res) => {

    let pathname = url.parse(req.url).pathname;

    // route.static(req, res, 'static/eos_verify');
    // route.static(req, res, 'static');
    route.static(req, res, 'static/ydlh');

    if (pathname == "/login") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end("login");

    } else if (pathname == "/register") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end("register");
    } else if (pathname == "/admin") {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end("admin");
    } else {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("404");
    }


}).listen(3000);


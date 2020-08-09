const url = require('url');
const fs = require('fs');
const mime = require('mime');
const path = require('path');

exports.static = function (req, res, staticPath) {

    let pathname = url.parse(req.url).pathname;
    pathname = (pathname == "/" ? '/index.html' : pathname);
    let extname = path.extname(pathname);


    if (pathname != "/favicon.ico") {
        try {
            let data = fs.readFileSync(staticPath + pathname);
            if (data) {
                let mimeStr = mime.getType(extname);
                res.writeHead(200, { "Content-Type": `${mimeStr}; charset=utf-8` });
                res.end(data);
            }
        } catch (error) {
            console.log(error);
        }


    }

}
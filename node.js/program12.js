"use strict";
const http = require('http');
const url = require('url')
let server = http.createServer(function (req, res) {
    let requrl = url.parse(req.url, true),
        pathname = requrl.pathname,
        isodate = requrl.query.iso, jsonobj;
    if (pathname == '/api/parsetime') {
        let date = new Date(isodate);
        jsonobj = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }

    } else if (pathname == '/api/unixtime') {
        jsonobj = {
            unixtime: (new Date(isodate).getTime())
        }
    }

    if (jsonobj) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(jsonobj));
    }else {
        res.writeHead(404);
        res.end();
    }

});

server.listen(process.argv[2])
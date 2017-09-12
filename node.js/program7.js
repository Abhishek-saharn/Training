// "use strict";
const http = require('http');

http.get(process.argv[2], function (response) {
    let body = '';
    response.setEncoding('utf8');
    response.on('data', (chunk)=> {
        console.log('chunk', chunk);
        body+=chunk;
    });
    response.on('end',function(){
        console.log(body.length);
        console.log(body);
    });
});

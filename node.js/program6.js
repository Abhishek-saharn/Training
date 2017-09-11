"use strict";
const http = require('http');

http.get(process.argv[2], function (response) {
    let body = [];
    response.setEncoding('utf8');
    response.on('data', (chunk)=> {
        body.push(chunk);
    });
    response.on('end',function(){
        body.forEach(bodyi=>{
        console.log(bodyi);
    })
    });

});

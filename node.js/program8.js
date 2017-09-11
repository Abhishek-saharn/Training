"use strict";
const http = require('http');
const async = require('async');

let urls = [process.argv[2], process.argv[3], process.argv[4]];
let resdata ='';

function getres(url, callback) {
    resdata = '';
    http.get(url, function (res) {

        if (res.statusCode != 200) return callback('request failed', null);
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            resdata += chunk;
        });

        res.on('end', function () {
            callback(null, resdata);
        });

    });
}

async.mapSeries(urls, getres, function (err, result) {
    if (err) console.log(err);
       result.forEach(resulti=>console.log(resulti));
})

/*
    Without Async

*/


// http.get(process.argv[2], function (res) {
//     let resdata = '';
//     res.setEncoding('utf8');
//     res.on('data', (chunk) => {
//         resdata += chunk;
//     });

//     res.on('end', function () {
//         console.log(resdata);
//         http.get(process.argv[3], function (res) {
//             resdata = '';
//             res.setEncoding('utf8');
//             res.on('data', (chunk) => {
//                 resdata += chunk;
//             });

//             res.on('end', function () {
//                 console.log(resdata);
//                 http.get(process.argv[4], function(res){
//                     resdata = '';
//                     res.setEncoding('utf8');
//                     res.on('data',(chunk)=>{
//                         resdata+=chunk;
//                     });

//                     res.on('end',function(){
//                         console.log(resdata);

//                     });

//                 });
//             });

//         });

//     });

// });
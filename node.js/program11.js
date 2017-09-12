"use strict";
const http = require('http');
const map = require('through2-map');
const fs = require('fs');
let data='';
let server = http.createServer(function(req,res){
    if(req.method=='POST'){
      /*
       *    With through2-map    
       */
        req.pipe(map(function(chunk){
            return chunk.toString().toUpperCase();
        })).pipe(res);
        
    /*
        Without through2-map
    */    
        
      /*  req.on('data',function(chunk){
            data+=chunk;
        });
        req.on('end',function(){
            res.end(data.toUpperCase());
        });
    */
    
    
    
    
    }
});

server.listen(process.argv[2]);
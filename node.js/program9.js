"use strict";
const net = require('net');
let server = net.createServer(function listener(socket){
    let today = new Date()
    let date = ('0'+today.getDate()).slice(-2);
    let month = ('0'+(today.getMonth()+1)).slice(-2);
    let year = today.getFullYear();
    let hour = ('0'+today.getHours()).slice(-2);
    let minutes = ('0'+today.getMinutes()).slice(-2);
    let fulldate=year+'-'+month+'-'+date+' '+hour+':'+minutes+'\n';
    socket.end(fulldate);
});
server.listen(process.argv[2]);
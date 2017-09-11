var p5mod = require('./p5mod');
var dir = process.argv[2];
var pext = process.argv[3];

p5mod(dir,pext, function(err, data){
    if(err)console.log(err);
    else{
        data.forEach(i=>console.log(i));
    }
})
var fs = require('fs');

fs.readdir(process.argv[2], function (err, list) {
    var ext = '.'+process.argv[3];
    list.forEach(s =>{
        if(s.indexOf(ext)!=-1){
            console.log(s);
        }
    } );
});
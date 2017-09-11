var fs = require('fs');
var path = require('path');

var getFilterFiles = function (dirname, ext, callback) {
    fs.readdir(dirname, function (err, data) {

        if (err) return callback(err, null);
        var values = [];
        var ext2 = '.' + ext;

        data.forEach(d => {
            if (path.extname(d) == ext2) {
                values.push(d);
            }
        });

        return callback(null, values);



    });
}

module.exports = getFilterFiles;
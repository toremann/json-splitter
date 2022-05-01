const fs = require('fs');

// read the file
fs.readFile('data/data.json', 'utf8', function (err, data) {

    // console.log(data.instrument_info.symbol)
    var newData = JSON.parse(data);
    console.log(newData)
    var stockname = data.instrument_info.symbol;
    var dir = 'newData/'
    // console.log(newData)

newData.forEach((data.instrument_info))
    fs.writeFile(dir + `${stockname}`.json, newData, err => {
        if (err) {
         console.error(err);
        }
        // done!
    });
 })

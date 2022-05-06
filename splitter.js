const fs = require('fs');
const fileName = 'data/data.json';

// read the file
fs.readFile(fileName, 'utf8', function (err, data) {

    // console.log(data.instrument_info.symbol)
    var newData = JSON.parse(data);

    // Its object :(
    console.log(typeof newData)

    var dir = 'newData/'
    // console.log(newData)

    for (const [key, value] of Object.entries(newData)) {
        // console.log(key);
        var stockName = value
        console.log('value', value)
        console.log('key', key)

        fs.writeFile(dir + `${stockName}`, value, err => {
            if (err) {
                console.log(err)
            }
        })
    }
 })

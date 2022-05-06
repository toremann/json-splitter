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

    for (const symbol of Object.keys(newData)) {
        // console.log(key);
        var symbolValue = newData[symbol];
        console.log("symbols", symbol, symbolValue)
        var stockName = symbolValue
        // console.log('value', value)
        // console.log('key', key)

        fs.writeFile(dir + `${stockName}`, symbol, err => {
            if (err) {
                console.log(err)
            }
        })
    }
 })

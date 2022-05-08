const fs = require('fs');
const fileName = 'data/data.json';
const dir = 'newData/'

// read the file
fs.readFile(fileName, 'utf8', function (err, data) {

    var newData = JSON.parse(data)
    var symb = [];

    for (const [key, value] of Object.entries(newData)) {

        symb.push(value.instrument_info.symbol);
        // console.log(typeof value)

    }
    console.log('symbols', symb)
    console.log('symb is:', typeof symb)

    // const symbString = JSON.stringify(symb)

    // console.log(symbString)
    // console.log('symbString is:', typeof symbString)

    for (let i = 0; i < symb.length; i++) {

        // Get the string value of pos 1, 2, etc...
        let stockName = JSON.stringify(symb[i]).replace(/(^"|\"$)/mg, '')
        let someData = 'Some data';

        console.log('stockName:', stockName, 'Type:', typeof stockName)

        fs.writeFile(dir + `${stockName}.json`, someData, err => {
            if (err) {
                console.log(err)
            }
        })
    }
 })


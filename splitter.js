const fs = require('fs');
const fileName = 'data/data.json';
const dir = 'newData/'

// read the file
fs.readFile(fileName, 'utf8', function (err, data) {

    var newData = JSON.parse(data)
    var stockSymbol = [];

    console.log(newData[1])

    // Push the symbols for creating JSON files
    for (const [key, value] of Object.entries(newData)) {

        stockSymbol.push(value.instrument_info.symbol);

    }

    for (let i = 0; i < stockSymbol.length; i++) {

        let stockName = JSON.stringify(stockSymbol[i]).replace(/(^"|\"$)/mg, '')
        let someData = JSON.stringify(newData[i], null, 2)

        console.log('Wrote data for:', stockName, '|', 'Stocks to write:', i+1, 'of', stockSymbol.length)

        fs.writeFile(dir + `${stockName}.json`, someData, err => {
            if (err) {
                console.log(err)
            }
        })
    }
 })


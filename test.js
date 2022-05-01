const fs = require ('fs');

var dir = 'newData/'

// Read file
fs.readFile('data/data.json', function (err, data) {
    // Do something
    let stocks = JSON.parse(data.instrument_info)[1]

    console.log(stocks)
});

// stocks.forEach (stocks => {
//   fs.writeFileSync(dir + `${stocks}.json`, stocks+"\r\n")
// });
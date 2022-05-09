const fs = require("fs");
const fileName = "data/data.json";
const dir = "newData/";

// Read the file
fs.readFile(fileName, "utf8", function (err, data) {
  if (err) {
    console.log("Readfile error", err);
  }

  var newData = JSON.parse(data);
  var stockSymbol = [];

  // Push the symbols for creating JSON files
  for (const [key, value] of Object.entries(newData)) {
    stockSymbol.push(value.instrument_info.symbol);
  }

  for (let i = 0; i < stockSymbol.length; i++) {
    let stockName = JSON.stringify(stockSymbol[i]).replace(/(^"|\"$)/gm, "");
    let stockData = JSON.stringify(newData[i], null, 2);

    console.log(
      "Wrote data for:",
      stockName,
      "|",
      "Stocks to write:",
      i + 1,
      "of",
      stockSymbol.length
    );

    fs.writeFile(dir + `${stockName}.json`, stockData, (err) => {
      if (err) {
        console.log("Writefile error", err);
      }
    });
  }
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.log("Readdir error", err);
    }
    console.log("Files created:", files.length);
  });
});

var path = require("path");
var fs = require("fs");


var mkdirsSync = dirname => {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

var genExcelFile = (targetPath, relativePath, data, lang) => {
    var csvText = `key, ${lang.join(",")}\n`;
    data.map(eachLine => {
        let keys = Object.keys(eachLine)
        keys.map((key, index) => {
            if (index == keys.length - 1) {
                csvText += `"${eachLine[key]}"\n`
            } else {
                csvText += `"${eachLine[key]}",`
            }
        })
    })
    let filePath = relativePath.replace(".ts", ".csv");
    let localesFilePath = path.join(targetPath, filePath);
    let curLocalesFilePath = localesFilePath.replace(/\/\w+\.csv$/, "");
    mkdirsSync(curLocalesFilePath);
    fs.writeFileSync(localesFilePath, csvText);
}

module.exports = genExcelFile

var parseJsonRec = (jsonData, parent, options) => {
    if (Object.keys(jsonData).length > 0) {
        Object.keys(jsonData).map(subKey => {
            if (typeof jsonData[subKey] == 'object') {
                //递归
                parseJsonRec(jsonData[subKey], parent ? `${parent}.${subKey}` : subKey, options)
            } else {
                options.push(parent ? `${parent}.${subKey}` : subKey)
            }
        });
    }
}
var parseJsonWrapper = (jsonData, options) => {
    if (typeof jsonData == 'object') {
        parseJsonRec(jsonData, "", options)
    }
}

//遍历json并将key输出到一个数组中
module.exports = parseJsonWrapper;
require("babel-register");
var path = require("path");
var { get } = require("lodash");
var getFilesPath = require("./getFilesPath");
var parseJsonWrapper = require("./parseJsonWrapper");   //将json的key平铺
var genExcelFile = require("./genExcelFile");

var jsonToExcel = (sourcePath, targetPath, lang, cmp) => {
    var fileList = [];
    var wrapperCatalog = `${sourcePath}/${lang[0]}/${cmp}`;
    
    getFilesPath(wrapperCatalog, "", fileList);
    
    fileList.map(relativePath => {
        var excelData = [];
        lang.map(curLang => {
            //当前语言版本对应的翻译文件总目录
            var curLangWrapperCatalog = `${sourcePath}/${curLang}/${cmp}`;
            //读取原始json文件（js文件中export）
            var filePath = path.join(curLangWrapperCatalog, relativePath);  //当前需要转换的ts文件路径
            var json = require(filePath).default;  //获取该文件对应的json数据
            var jsonWrapperArr = []; //平铺json文件的key值
            parseJsonWrapper(json, jsonWrapperArr)
            jsonWrapperArr.map((key, index) => {
                //如果当前解析的是第一门语言，则生成一条记录
                if(curLang == lang[0]) {
                    var newData = {
                        key,
                        cn: get(json, key, "")
                    };
                    excelData.push(newData);
                } else {
                    //如果是其他语言，就追加该语言的翻译内容
                    excelData[index][curLang] = get(json, key, "");
                }
            })
        });
        genExcelFile(targetPath, relativePath, excelData, lang);
    })
}

module.exports = jsonToExcel;



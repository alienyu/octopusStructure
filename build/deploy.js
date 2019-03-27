var path = require('path');
var fs =require('fs');
var deployConf = require("./config/releaseConfig.json");
var projectName = deployConf.projectName;
var deployContent = deployConf.deployContent;
//移动favicon图片到common目录下
let commonCategoryPath = `${process.cwd()}/${projectName}-output/common`;
let oldName = `${process.cwd()}/${projectName}-output/favicon.png`;
let newName = `${process.cwd()}/${projectName}-output/common/favicon.png`
if(!fs.existsSync(commonCategoryPath)) {
    fs.mkdirSync(commonCategoryPath)
}
if(fs.existsSync(oldName)) {
    try {
        fs.renameSync(oldName, newName);
        console.log("favicon文件处理成功");
    } catch(e) {
        console.log("favicon文件处理失败");
    }
}

//修改html对于favicon文件的引用路径
let platformList = Object.keys(deployContent);
platformList.map(platform => {
    let pageList = deployContent[platform].length > 0 ? deployContent[platform] : require(`${process.cwd()}/biz/${platform}/platformConf`)["pageList"];
    pageList.map(page => {
        var fileName = `${process.cwd()}/${projectName}-output/${platform}/${page}/${page}.html`
        var htmlContent = fs.readFileSync(fileName, 'utf-8');
        var newHtmlContent = htmlContent.replace("favicon.png", "common/favicon.png");
        fs.writeFileSync(fileName, newHtmlContent);
    })
})
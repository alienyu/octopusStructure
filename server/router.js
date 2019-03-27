var express = require("express");
var router = express.Router();
var referUrl, platform, projectPathArr, projectPath, pageNameArr, pageName, requestUrl, mappingList, fileWholePath;
/*
    mockServer可以自定义接口和对应文件的mapping关系,如果在mapping表中查不到则会执行默认规则.
    默认接口对应response文件名规则如下:
    eg:
    页面: 海外租车驾照翻译页
    接口名: /api-gateway/a/b/c
    对应文件位置: "/biz/mockData/" + bizName(rentCar/oversea/) + pageName(transDriverLicense/) + apiName(api-gateway-a-b-c.json)
 */

router.use(function(req, res) {
    referUrl = req.headers.referer;
    platform = referUrl.split(/\d\//)[1].split("/")[0].split("-")[0]; //web
    projectPathArr = referUrl.split(/\d\//)[1].split("/")[0].split("-");
    projectPathArr.splice(0,1);
    projectPath = projectPathArr.join("/"); //multiPageBiz
    pageNameArr = referUrl.split(/\d\//)[1].split("/");
    pageNameArr.splice(0,1);
    pageName = pageNameArr.join("/").replace(/\.html/,"");
    requestUrl = req.path;
    mappingList = require("../page/" + platform + "/" + projectPath + "/mockData/mappingList.json");
    jsonFileRoute = "./page/" + platform + "/" + projectPath + "/mockData/" + pageName + "/";
    if(mappingList[requestUrl]) {
        fileWholePath = jsonFileRoute + mappingList[requestUrl];
    } else {
        var jsonFileName = requestUrl.substr(1).split("/").join("-");
        fileWholePath = jsonFileRoute + jsonFileName + ".json";
    }

    res.sendfile(fileWholePath);

});

module.exports = router;
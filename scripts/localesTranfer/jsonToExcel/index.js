var jsonToExcel = require(`${process.cwd()}/biz/web/common/static/module/LocalesTransfer/jsonToExcel`);
var { platform, page, lang, cmp } = require("./config.json");

var sourcePath = `${process.cwd()}/biz/${platform}/page/${page}/locales`;
var targetPath = `${process.cwd()}/localesFormat/excel/${platform}/${page}/${cmp}`;

jsonToExcel(sourcePath, targetPath, lang, cmp);
var fs = require("fs");
var path = require("path");

var getFilesPath = (wrapperCatalog, childPath, list) => {
    let curCatalog = path.join(wrapperCatalog, childPath);
    var arr = fs.readdirSync(curCatalog);
	arr.forEach(function(item){
        var fullpath = path.join(curCatalog, item);
        var relativePath = path.join(childPath, item);
		var stats = fs.statSync(fullpath);
		if(stats.isDirectory()){
			getFilesPath(wrapperCatalog, relativePath, list);
		}else{
            if(!item.match(/index.ts/)) {
                list.push(relativePath);
            }
		}
    });
    return list;
} 

module.exports = getFilesPath
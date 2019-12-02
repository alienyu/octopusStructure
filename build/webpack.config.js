const fs = require("fs");

let envConf;
let env = process.env.NODE_ENV;
if(env) {
    envConf = require("./env/webpack.release.js");
} else {
    envConf = require("./env/webpack.dev.js");
}

genTSConf = (alias) => {
    let tsPaths = getTSPaths(alias);
    let tsBaseConf = require(`${process.cwd()}/tsconfig.base.json`);
    tsBaseConf.compilerOptions.paths = tsPaths;
    rewriteTSConfig(tsBaseConf);
}

getTSPaths = (alias) => {
    let tsPaths = {};
    Object.keys(alias).map(pathKey => {
        let tsPathKey, tsPathContent;
        tsPathKey = !!pathKey.match(/@/) ? `${pathKey}/*` : pathKey;
        tsPathContent = !!pathKey.match(/@/) ? `${alias[pathKey]}/*` : alias[pathKey];
        tsPaths[tsPathKey] = [tsPathContent];
    })
    return tsPaths;
}


rewriteTSConfig = (config) => {
    fs.writeFileSync(`${process.cwd()}/tsconfig.json`, JSON.stringify(config));
}

genTSConf(envConf.resolve.alias);

console.log(envConf)
module.exports = envConf;
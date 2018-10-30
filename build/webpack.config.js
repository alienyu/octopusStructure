let envConf;
let env = process.env.NODE_ENV;

if(env) {
    
    envConf = require("./env/webpack.release.js");
} else {

    envConf = require("./env/webpack.dev.js");
}
console.log(envConf)
module.exports = envConf;
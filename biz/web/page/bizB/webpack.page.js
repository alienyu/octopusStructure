let webpack = require('webpack');
let path =require("path");
console.log("this is bizB page")
module.exports = {
    resolve: {
        alias: {
            'components': `${path.resolve(__dirname, 'components')}`,
            'headerCmp': `${path.resolve(__dirname, 'routes/layout/header.jsx')}`,
            'footerCmp': `${path.resolve(__dirname, 'routes/layout/footer.jsx')}`,
            'menuBarCmp': `${path.resolve(__dirname, 'routes/layout/menuBar.jsx')}`,
            'Constants': `${path.resolve(__dirname, 'static/Constants.js')}`
        }
    },
    plugins: [
        new webpack.ProvidePlugin({

        })
    ]
}
// var list = ["icono", "icont"];
// list.map(key => {
//     var Icons = require("./" + key + ".js").default;
//     var config = Object.values(Icons)[0];
//     export { config }
// })
var iconList = ["User", "Lock"];
iconList.map(key => {
    var icon = require('@ant-design/icons/lib/outline/UserOutline').default;
    export {icon}
})

// export {}
// import Icons from './icono';
// const values = Object.values(Icons)[0];
// console.log('fsfd', values)

// import Icons2 from './icont';
// const values2 = Object.values(Icons2)[0];
// console.log('fsfd', values2)    
// var obj = {values, values2}
// console.log(...Object.values(obj))

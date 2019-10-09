export default {
  menuItems: [
    {
      "key": "bizA",
      "name": "bizA",
      "children": [
        {
          "key": "index",
          "name": "Index",
          "url": "/",
          "wholeUrl": "/web/bizA/"
        },
        {
          "key": "login",
          "name": "Login",
          "url": "/login",
          "wholeUrl": "/web/bizA/login"
        },
        {
          "key": "subRouter",
          "name": "subRouter",
          "children": [{
            "key": "subRouterA",
            "name": "subRouterA",
            "url": "/subRouter/subRouterA",
            "wholeUrl": "/web/bizA/subRouter/subRouterA"
          },{
            "key": "subRouterB",
            "name": "subRouterB",
            "url": "/subRouter/subRouterB",
            "wholeUrl": "/web/bizA/subRouter/subRouterB"
          }]
        }
      ]
    },
    {
      "key": "bizB",
      "name": "bizB",
      "children": [
        {
          "key": "index",
          "name": "Index",
          "url": "/",
          "wholeUrl": "/web/bizB/"
        },
        {
          "key": "login",
          "name": "Login",
          "url": "/login",
          "wholeUrl": "/web/bizB/login"
        },
        {
          "key": "noLayout",
          "name": "noLayout",
          "url": "/noLayout",
          "wholeUrl": "/web/bizB/noLayout"
        }
      ]
    }
  ],
  supportedLang: [{
    name: 'English',
    value: 'en'
  }, {
    name: '简体中文',
    value: 'cn'
  }]
}
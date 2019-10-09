export default {
  menuItems: [
    {
      "key": "bizA",
      "name": "bizA",
      "children": [
        {
          "key": "index",
          "name": "Index",
          "url": "",
          "wholeUrl": "/web/bizA/"
        },
        {
          "key": "login",
          "name": "Login",
          "url": "login",
          "wholeUrl": "/web/bizA/login"
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
          "url": "",
          "wholeUrl": "/web/bizB/"
        },
        {
          "key": "login",
          "name": "Login",
          "url": "login",
          "wholeUrl": "/web/bizB/login"
        },
        {
          "key": "noLayout",
          "name": "noLayout",
          "url": "noLayout",
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
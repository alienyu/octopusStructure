export default {
  menuItems: [
    {
      "key": "bizA",
      "name": "bizA",
      "children": [
        {
          "key": "bizA-index",
          "name": "Index",
          "url": "/web/bizA/"
        },
        {
          "key": "bizA-login",
          "name": "Login",
          "url": "/web/bizA/login"
        }
      ]
    },
    {
      "key": "bizB",
      "name": "bizB",
      "children": [
        {
          "key": "bizB-index",
          "name": "Index",
          "url": "/web/bizB/"
        },
        {
          "key": "bizB-login",
          "name": "Login",
          "url": "/web/bizB/login"
        },
        {
          "key": "bizB-noLayout",
          "name": "noLayout",
          "url": "/web/bizB/noLayout"
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
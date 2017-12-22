module.exports = {
  content: [
    [
      'pages',
      {
        page: '/_slug',
        permalink: '/pages/:slug',
        isPost: false,
        generate: ['get', 'getAll']
      }
    ]
  ]
}

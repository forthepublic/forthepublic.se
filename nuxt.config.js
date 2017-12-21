module.exports = {
  modules: [
    '@nuxtjs/bulma',
    ['@nuxtjs/google-analytics', {
      id: 'UA-110410768-1'
    }]
  ],
  head: {
    title: 'For the Public',
    titleTemplate: '%s - Designing for Social Impact!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    script: [
      { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,300i' },
      { rel: 'icon', href: '/favicon_16.png', type:'image/png', sizes:'16x16' },
      { rel: 'icon', href: '/favicon_32.png', type:'image/png', sizes:'32x32' },
    ]
  }
}

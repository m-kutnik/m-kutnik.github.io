const path = require('path') // eslint-disable-line
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('prerender').use(PrerenderSPAPlugin, {
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/', '/about', '/projects', '/contact'],
      })
    }
  },
}

const path = require('path') // eslint-disable-line
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/', '/about', '/projects', '/contact'],
      }),
    ],
  },
}

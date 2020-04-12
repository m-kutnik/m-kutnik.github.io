const path = require('path') // eslint-disable-line
const StyleLintPlugin = require('stylelint-webpack-plugin')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')

// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  publicPath: '',

  devServer: {
    disableHostCheck: true,
  },

  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // config.plugin('prerender').use(PrerenderSPAPlugin, [
      //   {
      //     staticDir: path.join(__dirname, 'dist'),
      //     routes: ['/'],
      //     renderer: new Renderer({
      //       args: ['--disable-gpu'],
      //     }),
      //   },
      // ])
    }

    config.plugin('stylelint').use(StyleLintPlugin, [
      {
        files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
      },
    ])
  },

  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },
}

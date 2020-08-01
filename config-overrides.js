const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer')

module.exports = function override(config, env) {
  if (env === 'development') {
    config = rewireReactHotLoader(config, env)
    config.resolve.alias['react-dom'] = '@hot-loader/react-dom'
  }

  if (env === 'production') {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html',
    })
  }

  return config
}

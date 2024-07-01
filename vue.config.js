const webpack = require('webpack');
const path = require('path');

module.exports = {
  chainWebpack: config => {
    // Configure the '@' alias
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
  },
  devServer: {
    port: 8096, // Adjust to your desired port
    hot: true,
    liveReload: true
  },
  configureWebpack: {
    devtool: 'source-map', // Avoid using eval in development mode
    resolve: {
      alias: {
        // Set up any aliases here
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.DefinePlugin({
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': false,
      }),
    ],
  },
};

/**
 * @file webpack prod config file
 */
var webpack = require('webpack');
var config = require('./webpack.base.config');

config.entry = './src/index.js';
config.output = {
    filename: './dist/vue-chartist.min.js',
    library: 'VueChartist',
    libraryTarget: 'umd'
};
config.externals = {
    chartist: {
        commonjs: "chartist",
        commonjs2: "chartist",
        amd: "Chartist",
        root: "Chartist"
    }
};

config.plugins = (config.plugins || []).concat([
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
            warnings: false
        }
    }),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    })
]);
module.exports = config;

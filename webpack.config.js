var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: __dirname + '/src',
                loaders: ['babel']
            }
        ]
    },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebpackPlugin({template: './src/index.html'})
    ]
};

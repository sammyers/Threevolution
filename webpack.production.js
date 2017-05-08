var webpack = require('webpack');
var { resolve } = require('path');

var BUILD_DIR = resolve(__dirname, 'dist');
var APP_DIR = resolve(__dirname, 'src');

module.exports = {
    entry: [
        APP_DIR + '/index.jsx'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin
    ]
};

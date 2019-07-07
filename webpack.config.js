// entry -> output
const path = require('path');


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
         test: /\.s?css$/,
         use: [
             'style-loader',
             'css-loader',
             'sass-loader'
         ]
    }]
    },
  
    mode: 'production',
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }

};
// where? entry --> output bundle.js
const path = require('path');

module.exports = {
    entry: './src/app.js',
    // bundle output config
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{ // regra para babel transpilar
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, // regra para scss
        {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    // debuger config
    devtool: 'cheap-module-eval-source-map',
    // local server config
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};


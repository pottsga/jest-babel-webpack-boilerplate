const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'), // the entry point of the app
    output: {
        path: path.resolve(__dirname, 'dist'), // put the file in the dist/ folder
        filename: 'bundle.[contenthash].js', // override the default main.js filename
        clean: true, // keep the dist folder clean
        assetModuleFilename: '[name][ext]', // don't rename the file
    },
    module: { // loaders
        rules: [ // loader file-types
            { // scss
                test: /\.scss$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            { // babel
                test: /\.js$/, // regex for what to match on
                exclude: /node_modules/, // exclude node modules folder
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }] // what loaders to use
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dad Jokes',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ],
    devServer: {
        open: true,
        hot: true,
        compress: true,
    }
}
const path = require('path');
const pj = path.join;
const fs = require('fs');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { ModuleConcatenationPlugin, UglifyJsPlugin } = require('webpack').optimize;

module.exports = {
    entry: path.resolve('src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            enforce: 'pre',
            use: 'tslint-loader'
        }, {
            test: /\.ts$/,
            use: ['awesome-typescript-loader']
        }]
    },
    target: 'web',
    plugins: [
        new CheckerPlugin(),
        new ModuleConcatenationPlugin(),
        new UglifyJsPlugin({
            sourceMap: true, uglifyOptions: {
                compress: { passes: 2 }
            }
        }),
        new CircularDependencyPlugin({ failOnError: true })
    ],
    devtool: 'source-map',
    devServer: {
        contentBase: 'dist/'
    },
    resolve: {
        extensions: ['.ts']
    }
};

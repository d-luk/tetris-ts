const path = require('path');
const pj = path.join;
const fs = require('fs');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { ModuleConcatenationPlugin, UglifyJsPlugin } = require('webpack').optimize;

const env = (process.env.NODE_ENV || 'production').trim();
const isProd = env === 'production';

console.log('Webpack env:', env);

const config = {
    entry: './src/script.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js',
        devtoolModuleFilenameTemplate: './scripts/[resource-path]'
    },
    target: 'web',
    resolve: {
        extensions: ['.ts']
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
    plugins: [
        new CheckerPlugin(),
        new UglifyJsPlugin({
            sourceMap: true,
            compress: { passes: 3 },
            mangle: isProd ? {
                properties: true
            } : false,
            beautify: !isProd,
            comments: false,
            parallel: true
        }),
        new CircularDependencyPlugin({ failOnError: true })
    ],
    devtool: isProd ? 'source-map' : 'inline-source-map'
};

if (isProd) {
    config.plugins.push(new ModuleConcatenationPlugin());
}

module.exports = config;
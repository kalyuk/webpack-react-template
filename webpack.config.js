/* eslint-disable */
import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ProgressPlugin from 'webpack/lib/ProgressPlugin';
import _ from 'lodash';

import {NODE_ENV, PORT, API_URL} from 'bin/env_config';

/* eslint-enable */
export const SOURCE_PATH = path.join(__dirname, '/client');
export const PUBLIC_PATH = path.join(__dirname, '.tmp');

let config = {
    context: SOURCE_PATH,

    entry: {
        app: [
            './client.jsx'
        ],
        vendors: [
            path.join(__dirname, 'node_modules/bootstrap/dist/css/bootstrap.min.css')
        ]
    },
    target: 'web',
    output: {
        path: PUBLIC_PATH,
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('style', 'css!stylus')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules|bower_components/,
                loaders: ['babel?presets[]=es2015,presets[]=react,plugins[]=transform-class-properties']
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?name=../.tmp/fonts/[name].[ext]?&limit=10000&minetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file?name=../.tmp/fonts/[name].[ext]'
            },
            {
                test: /\.(svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file?name=../.tmp/svg/[name].[ext]'
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [new RegExp(SOURCE_PATH)]
            }
        ]
    },
    node: {
        __filename: true
    },
    stats: {
        colors: true
    },
    eslint: {
        configFile: '.eslintrc'
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
        new webpack.DefinePlugin({
            'global.IS_BROWSER': true,
            'process.env': {
                NODE_ENV: JSON.stringify(NODE_ENV),
                API_URL: JSON.stringify(API_URL)
            }
        }),
        new webpack.NoErrorsPlugin()
    ]
};

export const production = _.extend({}, config, {
    plugins: (function () {
        let uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false,
                unused: true,
                drop_debugger: true, // eslint-disable-line camelcase
                drop_console: true   // eslint-disable-line camelcase
            }
        });

        let progressPlugin = new ProgressPlugin(function (percentage, msg) {
            let percents = percentage * 100;
            let percentageFormatted = String(percents).split('.').length > 1 ? (percents).toFixed(2) : percents;

            console.log(percentageFormatted + '%', msg); // eslint-disable-line no-console
        });

        return config.plugins.concat(uglifyJsPlugin, progressPlugin, new webpack.optimize.DedupePlugin());
    }()),
    eslint: _.extend({}, config.eslint, {emitError: true})
});

export const development = _.extend({}, config, {
    'entry.app': {
        app: config.entry.app.concat([
            `webpack-hot-middleware/client?http://0.0.0.0:${PORT}`,
            'webpack/hot/only-dev-server'
        ])
    },
    plugins: config.plugins.concat(new webpack.HotModuleReplacementPlugin()),
    module: _.extend({}, config.module, {
        loaders: (function () {
            let loaders = config.module.loaders;

            loaders[0].loader = 'style!css!stylus';
            loaders[2].loaders.unshift('react-hot');

            return loaders;
        }())
    }),
    devtool: 'eval'
});

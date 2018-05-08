var webpack = require("webpack");

module.exports = {
    entry: '../js/entry.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/../dist'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.js$/,
            options: {
                presets: ['env']
            },
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader'
        }]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            'jquery': 'jquery'
        }
    },
    watch: true,
    devServer: {
        contentBase: "../dist",
        compress: true,
        port: 8888
    },
    plugins: [
        new webpack.BannerPlugin(`This file is created by Lee`),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}
var webpack = require('webpack');

module.exports = function(isMinify) {


    return {
        output: {
            path: __dirname,
            filename: "bundle.js"
        },
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loaders: ["style", "css", "resolve-url", "sass?sourceMap"]
                },
                { test: /\.js$/, loaders: ['ng-annotate'] },
                { test: /\.html$/, loader: 'raw' },
                { test: /\.css$/, loader: "style!css" },
                { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
            ]
        },
        plugins: isMinify ? [
           new webpack.optimize.UglifyJsPlugin({
               sourceMap: true,
               mangle: false
           })
        ] : []
    };


};








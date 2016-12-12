
var wepack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry : './src/app/app.ts',
    output : {
        path : "./dist",
        filename: "app.bundle.js"
    },
    module : {
        loaders : [
            {
                test : /\.ts$/ , loader : 'ts'
            }
        ],
    },
    resolve : {
            extensions : [ '' , '.ts' , '.js'  ]
        },
        plugins : [
            new htmlWebpackPlugin({
                template : './src/index.html'
            })
        ]
}
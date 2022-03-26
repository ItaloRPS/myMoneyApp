const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output:{
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer:{ 
    port:8080,
    contentBase:'./public',
    },
    resolve:{
        extensions: ['', '.js', '.jsx'],
        alias:{
            modules: __dirname +'/node_modules',
            jquery:'modules/admin-lte/plugins/jQuery/jquery-2.2.3.min',
            bootstrap:'modules/admin-lte/bootstrap/js/bootstrap.js'
             
        }
    },
    plugins:[
         new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery'
        }),
         new ExtractTextPlugin('app.css'),
    ],
    module:{
        loaders:[{
            test: /\.js|\.jsx$/,
              loader: 'babel-loader',
            exclude: /node_modules/,
            query:{
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']

            }
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        },{
            test: /\.woff|.woff2|.ttt|.eot|.svg|.png|.ttf|.jpg*.*$/,
            loader:'file'
        }]
    }
}
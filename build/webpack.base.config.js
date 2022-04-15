const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
 module.exports = {
entry: {
    'app': './src/index.ts'
},
output: {
    path: path.join(__dirname,'../dist'),
    filename: '[name].[chunkhash:8].js'
},
resolve: {
    extensions: ['.js', '.tsx', ".ts"]
},
module: {
    rules: [
        {
            test: /\.tsx?$/i,
            use: [{
                loader: 'ts-loader'
            }],
            exclude: /node_modules/
        }
    ]
},
plugins: [
    new HtmlWebpackPlugin({
        template: './src/xgs/index.html'
    })
],
optimization: {
    splitChunks: {
        chunks: 'all'
      }
    }
 }
const HtmlWebpackPlugin = require('html-webpack-plugin')
 module.exports = {
entry: {
    'app': './src/index.ts'
},
output: {
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
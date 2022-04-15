const path = require('path');
module.exports = {
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        port: 8080
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader?cacheDirectory=true"],
                include: path.join(__dirname, "../src"),
            }
        ]
    }
}
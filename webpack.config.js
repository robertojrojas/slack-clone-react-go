/**
 * Created by robertorojas on 2/28/16.
 */
module.exports = {
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders:
            [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_mdoules/
            }
        ]
    }
};
// webpack.config.js

export const entry = './app/main.js';
export const output = {
    filename: 'bundle.js'
};
export const module = {
    loaders: [
        {
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }
    ]
};
export const devServer = {
    port: 3000
};
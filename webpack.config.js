var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {
    entry: {
        app: getEntrySources([
            './src/App.js'
        ])
    },
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'public/[name].js'
    },
    module: {
        loaders: [
            { 
                test: /\.(js|jsx)$/, 
                loaders: ['react-hot', 'jsx', 'babel'], 
                exclude: /node_modules/,
                presets: ["react", "es2015"]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader', //ExtractTextPlugin.extract('style!css'),
                exclude: /node_modules/
            }
        ]
       },
    plugins: [
        new ExtractTextPlugin('public/style.css', {
            allChunks: true
        })
    ]
};


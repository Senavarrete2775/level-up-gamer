const webpackConfig = {

    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {

                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'src/**/*.test.js'
        ],
        preprocessors: {
            'src/**/*.test.js': ['webpack']
        },
        webpack: webpackConfig,
        reporters: ['progress'],
        browsers: ['Chrome'],
        singleRun: false,
        client: {
            clearContext: false
        }
    });
};
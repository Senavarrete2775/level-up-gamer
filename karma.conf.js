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
                        presets: ['@babel/preset-react'],
                        plugins: ['@babel/plugin-transform-modules-commonjs']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg|avif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
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
            'src/test/**/*.test.js'
        ],
        preprocessors: {
            'src/test/**/*.test.js': ['webpack'],

            'src/test/**/!(*.test).js': ['webpack', 'coverage'],
            'src/test/**/!(*.test).jsx': ['webpack', 'coverage']
        },
        webpack: webpackConfig,


        reporters: ['progress', 'coverage'],


        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        },

        browsers: ['Chrome'],
        singleRun: false,
        client: {
            clearContext: false
        }
    });
};
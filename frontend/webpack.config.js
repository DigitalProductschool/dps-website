const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const fs = require('fs');

// adjusted from https://github.com/xpepermint/hash-webpack-plugin
class ExtractHashWebpackPlugin {
    constructor(fn) {
        this.fn = fn;
    }

    apply(compiler) {
        compiler.plugin('after-emit', (compilation, callback) => {
            this.fn(compilation.hash);
            callback(null);
        });
    }
}

function createConfig(type) {
    const config = {
        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js"]
        },
        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
                {
                    test: /\.css$/,
                    use: [
                      { loader: 'css-loader', options: { importLoaders: 1 } },
                      { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' } } }
                    ]
                }
            ]
        },
    };

    switch (type) {
        case 'server':
            return {
                entry: "./src/index-server.tsx",
                output: {
                    filename: "bundle-server.js",
                    path: __dirname + "/dist",
                    library: 'frontend',
                    libraryTarget: 'umd'
                },
                ...config,
                plugins: [
                    new webpack.ExtendedAPIPlugin(),
                ],
            }
        default: 
            return {
                entry: "./src/index.tsx",
                output: {
                    filename: "bundle.[hash].js",
                    path: __dirname + "/dist",
                },
                ...config,
                plugins: [
                    new HtmlWebpackPlugin(),
                    new ExtractHashWebpackPlugin((hash) => {
                        fs.writeFileSync(__dirname + '/dist/buildhash.js', "module.exports = " + "'" + hash + "';");
                    }),
                ],
            }

    }
}


module.exports = [
    createConfig(),
    createConfig('server'),
];

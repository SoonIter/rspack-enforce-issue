const { VueLoaderPlugin } = require('vue-loader');

/** @type {import('webpack').Configuration} */
module.exports = {
  context: __dirname,
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: { experimentalInlineMatchResource: true },
      },
      {
        enforce: 'pre',
        test: /\.vue/,
        use: () => {
          return [
            {
              loader: `./hello-loader.js`,
            },
          ];
        },
      },
    ],
  },
  devtool: 'source-map',
  plugins: [new VueLoaderPlugin()],
};

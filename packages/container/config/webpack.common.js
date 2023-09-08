const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            //@babel/preset-react - able for jsx; '@babel/preset-env' - able for different versions js/react
            presets: ['@babel/preset-react', '@babel/preset-env'],
            // '@babel/plugin-transform-runtime' - able on features as async await also
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [new HTMLWebpackPlugin({ template: './public/index.html' })],
}

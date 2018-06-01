module.exports = {
  entry: "./index.js",
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.md']
  },
  module: {
    rules: [{
      test: /\.md$/,
      use: [
        {
          loader: "html-loader"
        },
        {
          loader: "markdown-loader",
          options: {
            /* your options here */
          }
        },
      ]
    },
    {
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }]
  }
}
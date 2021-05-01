module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    });
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    config.output.publicPath = `${config.output.publicPath}`;
    config.node = { fs: "empty" };

    return config;
  },
};

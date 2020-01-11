const path = require('path');
const webpack = require('webpack');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.less$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        loader: 'less-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, '../'),
    path.resolve(__dirname, '../src'),
  ];

  config.resolve.alias = {
    lib: path.resolve(__dirname, '../lib'),
  };

  config.resolve.extensions.push('.js', '.jsx', '.less');

  config.plugins.push(
    new webpack.DefinePlugin({
      COMPONENT_PATTERN: /^.*\index.jsx$/,
      PROPS_PATTERN: /^.*\.story.jsx$/,
    })
  );

  return config;
};
module.exports = {
  presets: [
      'next/babel',
      ['@babel/preset-env', {
          targets: {
              node: 14
          }
      }]
  ]
}

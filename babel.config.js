// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    // Add this line if you're using React
    '@babel/preset-react',
  ],
};

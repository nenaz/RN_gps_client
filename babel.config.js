module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    ['babel-plugin-root-import', {
      root: __dirname,
      rootPathPrefix: "@/",
      rootPathSuffix: 'src/*'
    }]
  ]
};

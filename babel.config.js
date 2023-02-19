module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.svg',
          '.jpg',
          '.png',
        ],
        alias: {
          '@modules': './src/modules',
          '@assets': './src/assets',
          '@uiCore': './src/uiCore',
        },
      },
    ],
  ],
};

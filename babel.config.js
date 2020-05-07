module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@config': './src/config',
          '@features': './src/features',
          '@navigation': './src/navigation',
          '@reducers': './src/reducers',
          '@res': './src/resources',
          '@translation': './src/translations',
          '@constants': './src/constants',
          '@model': './src/data/model',
        },
      },
    ],
  ],
};

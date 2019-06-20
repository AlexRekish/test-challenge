module.exports = {
  presets: ['react-app'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-export-default-from',
    'babel-plugin-styled-components',
  ],
  env: {
    development: {
      plugins: [
        [
          'babel-plugin-styled-components',
          {
            displayName: true,
          },
        ],
      ],
    },
  },
};

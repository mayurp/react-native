module.exports = {
  func: require('./src/unlink'),
  description: 'unlink native dependency',
  name: 'unlink <packageName>',
  examples: [
    {
      desc: 'Unlink for iOS only',
      cmd: 'react-native unlink some-module --platform ios',
    },
  ],
  options: [{
    command: '-p, --platform [string]',
    description: 'Only unlink dependencies for specified platform (android|ios)',
    parse: /^(android|ios)$/i,
    default: 'all',
  }],
};

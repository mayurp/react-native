module.exports = {
  func: require('./src/link'),
  description: 'links all native dependencies',
  name: 'link [packageName]',
  examples: [
    {
      desc: 'Link for iOS only',
      cmd: 'react-native link some-module --platform ios',
    },
  ],
  options: [{
    command: '-p, --platform [string]',
    description: 'Only link dependencies for specified platform (android|ios)',
    parse: /^(android|ios)$/i,
    default: 'all',
  }],
};

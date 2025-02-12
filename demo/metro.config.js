const { getDefaultConfig } = require('expo/metro-config');

const path = require('path');

const config = getDefaultConfig(__dirname);

config.watchFolders = [...config.watchFolders, path.resolve(__dirname, '..'), path.resolve(__dirname, '../src')];

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
  path.resolve(__dirname, '../node_modules'),
];

config.resolver.resolveRequest = (context, moduleName, platform) => {
  const resolved = context.resolveRequest(context, moduleName, platform);

  if (moduleName.startsWith('@satoshi-ltd/nano-design')) {
    return {
      ...resolved,
      filePath: path.resolve(__dirname, '../src/index.js'),
    };
  }

  return resolved;
};

module.exports = config;

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add support for additional file extensions
config.resolver.assetExts.push('ttf', 'otf', 'png', 'jpg', 'jpeg', 'gif', 'svg');

module.exports = config;
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);
const withStorybook = require('@storybook/react-native/metro/withStorybook');

module.exports = withStorybook(config);
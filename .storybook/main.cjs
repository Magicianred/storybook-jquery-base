/** @type { import('@storybook/html-webpack5').StorybookConfig } */
module.exports = {
  framework: '@storybook/html-webpack5',
  stories: ['../src/**/*.stories.@(js|ts)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  webpackFinal: async (config) => {
    // opzionale: esponi $ e jQuery globalmente
    const webpack = require('webpack');
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })
    );
    return config;
  },
};

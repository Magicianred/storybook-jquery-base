// Assicura jQuery disponibile negli stories
import $ from 'jquery';
window.$ = $; window.jQuery = $;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { matchers: { color: /(background|color)$/i, date: /Date$/ } },
};

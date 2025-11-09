export function createAlert({ text = 'Messaggio', tone = 'success' } = {}) {
  const $el = $('<div class="ui-alert"></div>').text(text);
  if (tone) $el.addClass(tone);
  return $el[0];
}

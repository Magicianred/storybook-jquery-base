export function createBadge({ text = 'Nuovo', tone = 'success' } = {}) {
  const $el = $('<span class="ui-badge"></span>').text(text);
  if (tone) $el.addClass(tone);
  return $el[0];
}

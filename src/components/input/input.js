export function createInput({ label = 'Nome', placeholder = 'Scrivi qui...', value = '', type='text', onInput } = {}) {
  const id = `in-${Math.random().toString(36).slice(2,8)}`;
  const $wrap = $('<div></div>');
  const $label = $('<label class="ui-label" for="'+id+'"></label>').text(label);
  const $input = $('<input class="ui-input" />').attr({ id, placeholder, value, type });
  if (onInput) $input.on('input', (e)=> onInput(e.target.value));
  $wrap.append($label, $input);
  return $wrap[0];
}

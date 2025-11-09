export function createSelect({ label='Seleziona', options=['A','B','C'], value, onChange }={}) {
  const id = `sel-${Math.random().toString(36).slice(2,8)}`;
  const $wrap = $('<div></div>');
  const $label = $('<label class="ui-label" for="'+id+'"></label>').text(label);
  const $sel = $('<select class="ui-select"></select>').attr({ id });
  options.forEach(opt => $sel.append(`<option value="${opt}">${opt}</option>`));
  if (value) $sel.val(value);
  if (onChange) $sel.on('change', (e)=> onChange(e.target.value));
  $wrap.append($label, $sel);
  return $wrap[0];
}

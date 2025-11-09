export function createCheckbox({ label='Accetto i termini', checked=false, onChange }={}) {
  const id = `chk-${Math.random().toString(36).slice(2,8)}`;
  const $wrap = $('<div></div>');
  const $input = $('<input type="checkbox" />').attr({ id });
  if (checked) $input.prop('checked', true);
  if (onChange) $input.on('change', (e)=> onChange(e.target.checked));
  const $label = $('<label></label>').attr('for', id).text(' ' + label);
  $wrap.append($input, $label);
  return $wrap[0];
}

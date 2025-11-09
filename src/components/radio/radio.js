export function createRadioGroup({ name='group', options=['A','B'], value, onChange }={}) {
  const $wrap = $('<div></div>');
  options.forEach((opt, idx)=>{
    const id = `r-${name}-${idx}`;
    const $input = $('<input type="radio" />').attr({ id, name, value: opt });
    if (value === opt) $input.prop('checked', true);
    if (onChange) $input.on('change', (e)=> onChange(e.target.value));
    const $label = $('<label></label>').attr('for', id).text(' ' + opt);
    $wrap.append($input, $label, $('<span> </span>'));
  });
  return $wrap[0];
}

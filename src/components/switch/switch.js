export function createSwitch({ checked=false, onChange }={}) {
  const $el = $('<span class="ui-switch"><span class="dot"></span></span>');
  if (checked) $el.addClass('on');
  $el.on('click', ()=>{
    $el.toggleClass('on');
    onChange && onChange($el.hasClass('on'));
  });
  return $el[0];
}

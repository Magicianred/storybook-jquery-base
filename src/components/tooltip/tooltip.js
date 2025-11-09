export function attachTooltip($target, { text='Suggerimento' }={}) {
  let $tip;
  function show(){
    $tip = $('<div class="ui-tooltip"></div>').text(text).appendTo('body');
    const off = $target.offset();
    $tip.css({ left: off.left, top: off.top - $tip.outerHeight() - 6 });
  }
  function hide(){ $tip && $tip.remove(); $tip=null; }
  $target.on('mouseenter', show).on('mouseleave', hide);
  return { destroy(){ hide(); $target.off('mouseenter mouseleave'); } };
}

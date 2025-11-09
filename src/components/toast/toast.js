export function showToast({ text='Operazione eseguita', duration=2000 }={}) {
  const $t = $('<div class="ui-toast"></div>').text(text).appendTo('body');
  setTimeout(()=> $t.fadeOut(200, ()=> $t.remove()), duration);
  return $t[0];
}

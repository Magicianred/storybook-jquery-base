export function createTabs({ tabs=[{id:'a',label:'Tab A',content:'Contenuto A'},{id:'b',label:'Tab B',content:'Contenuto B'}], active='a' }={}) {
  const $root = $('<div></div>');
  const $list = $('<div class="ui-tabs"></div>');
  const $panel = $('<div class="ui-tabpanel"></div>');
  function activate(id){
    $list.find('.ui-tab').removeClass('active');
    $list.find(`[data-id="${id}"]`).addClass('active');
    const t = tabs.find(x=>x.id===id);
    $panel.html(typeof t.content === 'string' ? `<p>${t.content}</p>` : '').append(t.content instanceof HTMLElement ? t.content : null);
  }
  tabs.forEach(t=> $list.append(`<button class="ui-tab" data-id="${t.id}">${t.label}</button>`));
  $root.append($list, $panel);
  $list.on('click','.ui-tab', (e)=> activate($(e.currentTarget).data('id')));
  activate(active);
  return $root[0];
}

export function createAccordion({ items=[{title:'Sezione 1',content:'Testo 1'},{title:'Sezione 2',content:'Testo 2'}] }={}) {
  const $root = $('<div class="ui-accordion"></div>');
  items.forEach((it, idx)=>{
    const $item = $('<div class="ui-accordion-item"></div>');
    const $h = $('<div class="ui-accordion-header"></div>').text(it.title);
    const $b = $('<div class="ui-accordion-body"></div>').html(`<p>${it.content}</p>`);
    $item.append($h, $b);
    $root.append($item);
    $h.on('click', ()=> $b.slideToggle(120));
  });
  return $root[0];
}

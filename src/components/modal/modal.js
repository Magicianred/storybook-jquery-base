export function createModal({ title='Titolo', body='Contenuto', show=false, onClose }={}) {
  const $backdrop = $('<div class="ui-modal-backdrop" style="display:none"></div>');
  const $modal = $('<div class="ui-modal"></div>');
  $modal.append(`<h3 style="margin-top:0">${title}</h3>`);
  $modal.append(`<div class="body"><p>${body}</p></div>`);
  const $footer = $('<div style="display:flex; justify-content:flex-end; gap:8px"></div>');
  const $close = $('<button class="ui-btn">Chiudi</button>');
  $footer.append($close);
  $modal.append($footer);
  $backdrop.append($modal);
  $close.on('click', ()=> hide());
  $backdrop.on('click', (e)=> { if (e.target === $backdrop[0]) hide(); });
  function showModal(){ $backdrop.fadeIn(120); }
  function hide(){ $backdrop.fadeOut(120); onClose && onClose(); }
  if (show) setTimeout(showModal, 0);
  return Object.assign($backdrop[0], { show: showModal, hide });
}

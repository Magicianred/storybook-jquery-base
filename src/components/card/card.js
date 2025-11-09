export function createCard({ title = 'Titolo', body = 'Contenuto di esempio', footer } = {}) {
  const $wrap = $('<div class="ui-card"></div>');
  $wrap.append(`<h3 style="margin-top:0">${title}</h3>`);
  $wrap.append(`<p>${body}</p>`);
  if (footer) $wrap.append(footer);
  return $wrap[0];
}

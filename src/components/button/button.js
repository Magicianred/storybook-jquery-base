export function createButton({ label = 'Cliccami', variant = 'default', onClick } = {}) {
  const $btn = $('<button class="ui-btn"></button>').text(label);
  if (variant === 'primary') $btn.addClass('primary');
  if (onClick) $btn.on('click', onClick);
  return $btn[0];
}

import { attachTooltip } from './tooltip';
import { createButton } from '../button/button';

export default { title: 'Overlay/Tooltip' };

export const Base = {
  render: () => {
    const btn = createButton({ label:'Hovera qui' });
    setTimeout(()=> attachTooltip($(btn), { text:'Tooltip semplice' }), 0);
    return btn;
  }
};

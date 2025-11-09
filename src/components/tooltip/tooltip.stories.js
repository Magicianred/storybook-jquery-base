import { attachTooltip } from './tooltip';
import { createButton } from '../button/button';

const meta = {
  title: 'Overlay/Tooltip',
  render: () => document.createElement('div'),
};
export default meta;

export const Base = {
  render: () => {
    const btn = createButton({ label:'Hovera qui' });
    setTimeout(()=> attachTooltip($(btn), { text:'Tooltip semplice' }), 0);
    return btn;
  }
};

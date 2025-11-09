import { showToast } from './toast';
import { createButton } from '../button/button';

const meta = {
  title: 'Overlay/Toast',
  render: () => document.createElement('div'),
};
export default meta;

export const Base = {
  render: () => {
    const btn = createButton({ label:'Mostra Toast', onClick: ()=> showToast({ text:'Salvato!' }) });
    return btn;
  }
};

import { showToast } from './toast';
import { createButton } from '../button/button';

export default { title: 'Overlay/Toast' };

export const Base = {
  render: () => {
    const btn = createButton({ label:'Mostra Toast', onClick: ()=> showToast({ text:'Salvato!' }) });
    return btn;
  }
};

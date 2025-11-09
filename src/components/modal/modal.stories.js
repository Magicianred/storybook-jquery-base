import { createModal } from './modal';
import { createButton } from '../button/button';

export default { title: 'Overlay/Modal', argTypes:{ onClose:{ action:'closed' } } };

export const Base = {
  render: (args)=>{
    const modal = createModal(args);
    const btn = createButton({ label:'Apri Modale', onClick: ()=> modal.show() });
    const wrap = document.createElement('div');
    wrap.append(btn, modal);
    return wrap;
  },
  args: { title:'Ciao', body:'Contenuto modale' }
};

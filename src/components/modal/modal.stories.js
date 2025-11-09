import { createModal } from './modal';
import { createButton } from '../button/button';

const meta = {
  title: 'Overlay/Modal',
  render: (args) => {
    const m = createModal(args);
    const btn = createButton({ label:'Apri Modale', onClick: ()=> m.show() });
    const wrap = document.createElement('div');
    wrap.append(btn, m);
    return wrap;
  },
  argTypes:{ onClose:{ action:'closed' } }
};
export default meta;

export const Base = { args: { title:'Ciao', body:'Contenuto modale' } };

import { createCheckbox } from './checkbox';

const meta = {
  title: 'Forms/Checkbox',
  render: (args) => createCheckbox(args),
  argTypes:{ onChange:{action:'changed'} }
};
export default meta;

export const Base = { args: { label:'Accetto', checked:false } };
export const Checked = { args: { label:'Selezionato', checked:true } };

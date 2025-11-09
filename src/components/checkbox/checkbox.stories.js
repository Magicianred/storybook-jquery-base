import { createCheckbox } from './checkbox';

export default { title: 'Forms/Checkbox', argTypes:{ onChange:{action:'changed'} } };

export const Base = { args: { label:'Accetto', checked:false } };
export const Checked = { args: { label:'Selezionato', checked:true } };

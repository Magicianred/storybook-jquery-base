import { createSelect } from './select';

export default { title: 'Forms/Select', argTypes:{ onChange:{ action:'changed' } } };

export const Base = { args: { label:'Città', options:['Parma','Bologna','Milano'], value:'Parma' } };

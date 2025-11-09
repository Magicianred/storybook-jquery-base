import { createSelect } from './select';

const meta = {
  title: 'Forms/Select',
  render: (args) => createSelect(args),
  argTypes:{ onChange:{ action:'changed' } }
};
export default meta;

export const Base = { args: { label:'Città', options:['Parma','Bologna','Milano'], value:'Parma' } };

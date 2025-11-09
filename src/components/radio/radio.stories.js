import { createRadioGroup } from './radio';

const meta = {
  title: 'Forms/Radio',
  render: (args) => createRadioGroup(args),
  argTypes:{ onChange:{action:'changed'} }
};
export default meta;

export const Base = { args: { name:'scelta', options:['Rosso','Verde','Blu'], value:'Verde' } };

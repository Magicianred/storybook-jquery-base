import { createSwitch } from './switch';

const meta = {
  title: 'Forms/Switch',
  render: (args) => createSwitch(args),
  argTypes:{ onChange:{ action:'toggled' } }
};
export default meta;

export const Off = { args: { checked:false } };
export const On  = { args: { checked:true } };

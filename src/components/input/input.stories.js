import { createInput } from './input';

const meta = {
  title: 'Forms/Input',
  render: (args) => createInput(args),
};
export default meta;

export const Text = { args: { label: 'Nome', placeholder: 'Mario Rossi' } };
export const Password = { args: { label: 'Password', type:'password' } };

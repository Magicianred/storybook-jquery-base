import { createButton } from './button';

const meta = {
  title: 'Components/Button',
  render: (args) => createButton(args),
  argTypes: { onClick: { action: 'clicked' } },
};
export default meta;

export const Default = { args: { label: 'Cliccami' } };
export const Primary = { args: { label: 'Azione', variant: 'primary' } };
export const WithHandler = { args: { label: 'Con onClick', onClick: ()=>{} } };

import { createButton } from './button';

export default {
  title: 'Components/Button',
  argTypes: { onClick: { action: 'clicked' } },
};

export const Default = { args: { label: 'Cliccami' } };
export const Primary = { args: { label: 'Azione', variant: 'primary' } };
export const WithHandler = { args: { label: 'Con onClick', onClick: ()=>{} } };

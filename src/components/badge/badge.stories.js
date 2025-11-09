import { createBadge } from './badge';

const meta = {
  title: 'Components/Badge',
  render: (args) => createBadge(args),
};
export default meta;

export const Success = { args: { text: 'Success', tone: 'success' } };
export const Warning = { args: { text: 'Warning', tone: 'warn' } };
export const Danger  = { args: { text: 'Danger',  tone: 'danger' } };

import { createAlert } from './alert';

const meta = {
  title: 'Components/Alert',
  render: (args) => createAlert(args),
};
export default meta;

export const Success = { args: { text: 'Operazione completata', tone: 'success' } };
export const Warning = { args: { text: 'Attenzione richiesta', tone: 'warn' } };
export const Danger  = { args: { text: 'Errore irreversibile', tone: 'danger' } };

import { createAlert } from './alert';

export default { title: 'Components/Alert' };

export const Success = { args: { text: 'Operazione completata', tone: 'success' } };
export const Warning = { args: { text: 'Attenzione richiesta', tone: 'warn' } };
export const Danger  = { args: { text: 'Errore irreversibile', tone: 'danger' } };

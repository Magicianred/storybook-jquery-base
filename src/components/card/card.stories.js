import { createCard } from './card';
import { createBadge } from '../badge/badge';

const meta = {
  title: 'Components/Card',
  render: (args) => createCard(args),
};
export default meta;

export const Base = { args: { title: 'Scheda', body: 'Testo della scheda.' } };

export const WithFooter = {
  render: (args) => createCard({ ...args, footer: createBadge({ text:'Stable', tone:'success' }) })
};

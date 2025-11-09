import { createCard } from './card';
import { createBadge } from '../badge/badge';

export default { title: 'Components/Card' };

export const Base = {
  args: { title: 'Scheda', body: 'Testo della scheda.' }
};

export const WithFooter = {
  render: (args) => createCard({ ...args, footer: createBadge({ text:'Stable', tone:'success' }) })
};

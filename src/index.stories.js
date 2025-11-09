// Quick gallery of components
import { createCard } from './components/card/card';
import { createButton } from './components/button/button';
import { createBadge } from './components/badge/badge';

export default { title: 'Overview/Gallery' };

export const Gallery = {
  render: () => {
    const root = document.createElement('div');
    root.className = 'ui-row';
    const c1 = createCard({ title:'Button', body:'Base e Primary', footer: createButton({ label:'Action', variant:'primary' }) });
    const c2 = createCard({ title:'Badge', body:'Toni multipli', footer: createBadge({ text:'ok', tone:'success' }) });
    const c3 = createCard({ title:'Scheda vuota', body:'Elemento dimostrativo' });
    root.append(c1, c2, c3);
    return root;
  }
};

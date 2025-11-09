import { createTabs } from './tabs';

export default { title: 'Navigation/Tabs' };

export const Base = { args: { tabs: [
  { id:'uno', label:'Uno', content:'Primo tab' },
  { id:'due', label:'Due', content:'Secondo tab' },
  { id:'tre', label:'Tre', content:'Terzo tab' },
], active:'uno' } };

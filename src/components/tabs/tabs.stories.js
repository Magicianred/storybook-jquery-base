import { createTabs } from './tabs';

const meta = {
  title: 'Navigation/Tabs',
  render: (args) => createTabs(args),
};
export default meta;

export const Base = { args: { tabs: [
  { id:'uno', label:'Uno', content:'Primo tab' },
  { id:'due', label:'Due', content:'Secondo tab' },
  { id:'tre', label:'Tre', content:'Terzo tab' },
], active:'uno' } };

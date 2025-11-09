import { createAccordion } from './accordion';

const meta = {
  title: 'Navigation/Accordion',
  // Renderer esplicito: ritorna un HTMLElement
  render: (args) => createAccordion(args),
};
export default meta;

export const Base = { args: { items:[
  { title:'FAQ 1', content:'Risposta alla domanda 1.'},
  { title:'FAQ 2', content:'Risposta alla domanda 2.'},
  { title:'FAQ 3', content:'Risposta alla domanda 3.'},
] } };
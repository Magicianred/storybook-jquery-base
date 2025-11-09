import { createRadioGroup } from './radio';

export default { title: 'Forms/Radio', argTypes:{ onChange:{action:'changed'} } };

export const Base = { args: { name:'scelta', options:['Rosso','Verde','Blu'], value:'Verde' } };

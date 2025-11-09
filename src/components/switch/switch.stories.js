import { createSwitch } from './switch';

export default { title: 'Forms/Switch', argTypes:{ onChange:{ action:'toggled' } } };

export const Off = { args: { checked:false } };
export const On  = { args: { checked:true } };

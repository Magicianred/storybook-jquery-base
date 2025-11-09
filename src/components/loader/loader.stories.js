import { createLoader } from './loader';

export default { title: 'Feedback/Loader' };

export const Spinner = { render: () => createLoader() };

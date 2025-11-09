import type { Event } from './types';

export const defaultEvent: Event = {
  id: '',
  dateString: '',
  time: { hour: 0, minute: 0 },
  type: 'Маникюр',
  duration: 1,
  remainderOne: 2,
  remainderTwo: 24,
};

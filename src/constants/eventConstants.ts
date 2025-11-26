import type { Day } from '@/lib/createYearCalendar';
import type { Event } from '../types';

export const defaultEvent: Event = {
  id: '',
  dateString: '',
  time: { hour: 0, minute: 0 },
  type: 'Другое',
  duration: 1,
  reminderOne: 2,
  reminderTwo: 24,
  comments: '',
};

export const eventTypes = [
  'Маникюр / педикюр',
  'Брови / ресницы',
  'Парикмахерская',
  'Косметология',
  'Массаж',
  'Депиляция',
  'Другое',
];

export const defaultDay: Day = {
  dateString: '',
  dayOfYear: null,
  isHoliday: false,
  isWeekend: false,
  isSelected: false,
};

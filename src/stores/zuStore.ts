import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { Event } from '@/types';
import { defaultDay, defaultEvent } from '@/constants/eventConstants';
import type { Day } from '@/lib/createYearCalendar';

interface EventsState {
  // bears: number;
  events: Event[];
  setEvents: (events: Event[]) => void;
  addEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
  selectedEvent: Event;
  setSelectedEvent: (event: Event) => void;
  setDefaultEvent: () => void;
  notificationNum: number;
  notificationNumInc: () => void;
  isDayScheduleOpen: boolean;
  setIsDayScheduleOpen: (isOpen: boolean) => void;
  selectedDay: Day;
  setSelectedDay: (day: Day) => void;
}

export const useEventsStore = create<EventsState>()(
  devtools((set) => ({
    events: [],
    setEvents: (events) => set(() => ({ events: events })),
    addEvent: (event) =>
      set((state) => ({
        events: [...state.events, event],
      })),
    deleteEvent: (id) =>
      set((state) => ({
        events: state.events.filter((event) => event.id !== id),
      })),
    selectedEvent: defaultEvent,
    setSelectedEvent: (event) => set(() => ({ selectedEvent: event })),
    setDefaultEvent: () => set(() => ({ selectedEvent: defaultEvent })),
    notificationNum: 0,
    notificationNumInc: () =>
      set((state) => ({ notificationNum: state.notificationNum + 1 })),
    isDayScheduleOpen: false,
    setIsDayScheduleOpen: (isOpen) =>
      set(() => ({ isDayScheduleOpen: isOpen })),
    selectedDay: defaultDay,
    setSelectedDay: (day) => set(() => ({ selectedDay: day })),
  })),
);

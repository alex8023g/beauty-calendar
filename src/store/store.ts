import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';
import type { Event } from '@/types';
import { defaultEvent } from '@/constants/defaultEvent';

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
}

export const useEventsStore = create<EventsState>()(
  // devtools(
  (set) => ({
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
  }),
  // ),
);

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type {} from '@redux-devtools/extension'; // required for devtools typing
import type { Event } from '@/types';
import { defaultEvent } from '@/constants';
interface EventsState {
  // bears: number;
  // increase: (by: number) => void;
  events: Event[];
  setEvents: (events: Event[]) => void;
  addEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
  selectedEvent: Event;
  setSelectedEvent: (event: Event) => void;
  setDefaultEvent: () => void;
}

export const useEventsStore = create<EventsState>()(
  devtools((set) => ({
    // bears: 0,
    // increase: (by) => set((state) => ({ bears: state.bears + by })),
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
  })),
);

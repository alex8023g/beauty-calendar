import { saveEventsToLocalStorage } from '@/stores/localStore';
import { Button } from './ui/button';
import { scheduleBasicNotification } from '@/lib/localNotifications';
import { nanoid } from 'nanoid';
import type { Event } from '@/types';
import { useEventsStore, useStatesStore } from '@/stores/zuStore';
import type { Day } from '@/lib/createYearCalendar';

export function AddEventBtn({ day }: { day: Day }) {
  const events = useEventsStore((state) => state.events);
  const setEvents = useEventsStore((state) => state.setEvents);
  const selectedEvent = useEventsStore((state) => state.selectedEvent);
  const setIsDetailsOpen = useStatesStore((state) => state.setIsDetailsOpen);
  return (
    <Button
      variant='default'
      className='grow'
      onClick={async () => {
        const updEvents: Event[] = [
          ...events,
          {
            ...selectedEvent,
            id: nanoid(),
            dateString: day.dateString,
          },
        ];
        saveEventsToLocalStorage(updEvents);
        setEvents(updEvents);
        scheduleBasicNotification({ events: updEvents });
        setIsDetailsOpen(false);
      }}
    >
      Добавить
    </Button>
  );
}

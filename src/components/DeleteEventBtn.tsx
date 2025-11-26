import { saveEventsToLocalStorage } from '@/stores/localStore';
import { Button } from './ui/button';
import { scheduleBasicNotification } from '@/lib/localNotifications';
import type { Event } from '@/types';
import { useEventsStore, useStatesStore } from '@/stores/zuStore';

export function DeleteEventBtn({
  variant,
}: {
  variant: 'forEventsList' | 'forDaySchedule';
}) {
  const events = useEventsStore((state) => state.events);
  const setEvents = useEventsStore((state) => state.setEvents);
  const selectedEvent = useEventsStore((state) => state.selectedEvent);
  const setIsDetailsOpen = useStatesStore((state) => state.setIsDetailsOpen);
  const setIsDayScheduleOpen = useStatesStore(
    (state) => state.setIsDayScheduleOpen,
  );
  const setDefaultEvent = useEventsStore((state) => state.setDefaultEvent);
  return (
    <Button
      variant='destructive'
      className='grow'
      onClick={async () => {
        const updEvents: Event[] = events.filter(
          (event) => event.id !== selectedEvent.id,
        );
        saveEventsToLocalStorage(updEvents);
        setEvents(updEvents);
        scheduleBasicNotification({
          events: updEvents,
        });
        setIsDetailsOpen(false);
        if (variant === 'forEventsList') {
          setIsDayScheduleOpen(false);
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
        setDefaultEvent();
      }}
    >
      Удалить
    </Button>
  );
}

import { saveEventsToLocalStorage } from '@/stores/localStore';
import { Button } from './ui/button';
import { scheduleBasicNotification } from '@/lib/localNotifications';
import type { Event } from '@/types';
import { useEventsStore, useStatesStore } from '@/stores/zuStore';

export function UpdEventBtn({
  variant,
}: {
  variant: 'forDaySchedule' | 'forEventsList';
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
      variant='default'
      className='grow'
      onClick={async () => {
        const updEvents: Event[] = [...events];
        const index = updEvents.findIndex(
          (event) => event.id === selectedEvent.id,
        );
        updEvents[index] = selectedEvent;
        saveEventsToLocalStorage(updEvents);
        scheduleBasicNotification({ events: updEvents });
        // setIsDetailsOpen(false);
        if (variant === 'forDaySchedule') {
          setIsDetailsOpen(false);
        } else {
          setIsDayScheduleOpen(false);
          setIsDetailsOpen(false);
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
        setEvents(updEvents);
        setDefaultEvent();
      }}
    >
      Сохранить
    </Button>
  );
}

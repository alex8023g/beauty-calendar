import { DaySchedule2 } from '@/components/DaySchedule2';
import Drawer from '@/components/Drawer';
import { EventsListItem } from '@/components/EventsListItem';
import { useEventsStore, useStatesStore } from '@/stores/zuStore';
import dayjs from 'dayjs';

export function EventsListPage() {
  const events = useEventsStore((state) => state.events);
  const selectedDay = useStatesStore((state) => state.selectedDay);
  return (
    <div>
      <ul role='list' className='divide-y divide-gray-100'>
        {events
          .filter(
            (event) =>
              dayjs(event.dateString).valueOf() >=
              dayjs().subtract(1, 'day').valueOf(),
          )
          .sort(
            (a, b) =>
              dayjs(a.dateString).valueOf() - dayjs(b.dateString).valueOf(),
          )
          .map((event) => (
            // <li key={event.id}>{event.type}</li>
            <EventsListItem key={event.id} event={event} />
          ))}
      </ul>
      <Drawer>
        <DaySchedule2 day={selectedDay} />
      </Drawer>
    </div>
  );
}

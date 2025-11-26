import Comments from '@/components/Comments';
import { DaySchedule2 } from '@/components/DaySchedule2';
import Drawer from '@/components/Drawer';
import { EventsListItem } from '@/components/EventsListItem';
import { useEventsStore, useStatesStore } from '@/stores/zuStore';
import dayjs from 'dayjs';

export function EventsListPage() {
  const events = useEventsStore((state) => state.events);
  const selectedDay = useStatesStore((state) => state.selectedDay);
  const futureEvents = events.filter(
    (event) =>
      dayjs(event.dateString).valueOf() >= dayjs().subtract(1, 'day').valueOf(),
  );
  return (
    <div className='flex h-full flex-col'>
      {futureEvents.length > 0 ? (
        <ul role='list' className='divide-y divide-gray-100'>
          {futureEvents
            .sort(
              (a, b) =>
                dayjs(a.dateString).valueOf() - dayjs(b.dateString).valueOf(),
            )
            .map((event) => (
              // <li key={event.id}>{event.type}</li>
              <EventsListItem key={event.id} event={event} />
            ))}
        </ul>
      ) : (
        <div className='my-auto'>
          <p className='text-center text-gray-500'>Нет предстоящих событий</p>
          <p className='text-center text-gray-500'>
            Добавьте события в календаре
          </p>
        </div>
      )}
      <Drawer>
        <DaySchedule2 day={selectedDay} />
      </Drawer>
      <div className='mt-auto'>
        <Comments />
      </div>
    </div>
  );
}

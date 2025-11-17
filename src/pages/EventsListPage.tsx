import { EventsListItem } from '@/components/EventsListItem';
import { useEventsStore } from '@/stores/zuStore';
import dayjs from 'dayjs';

export function EventsListPage() {
  const events = useEventsStore((state) => state.events);
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
    </div>
  );
}

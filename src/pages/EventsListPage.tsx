import { EventsListItem } from '@/components/EventsListItem';
import { useEventsStore } from '@/stores/zuStore';

export function EventsListPage() {
  const events = useEventsStore((state) => state.events);
  return (
    <div>
      {/* <h1>Events List</h1> */}
      <ul role='list' className='divide-y divide-gray-100'>
        {events.map((event) => (
          // <li key={event.id}>{event.type}</li>
          <EventsListItem key={event.id} event={event} />
        ))}
      </ul>
    </div>
  );
}

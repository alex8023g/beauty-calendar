import { useEventsStore } from '@/stores/zuStore';
import type { Event } from '@/types';
import type { Dispatch, SetStateAction } from 'react';

export function EventItem({
  event,
  setIsDetailsOpen,
}: {
  event: Event;
  setIsDetailsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const setSelectedEvent = useEventsStore((state) => state.setSelectedEvent);
  return (
    <li
      style={{
        gridRow: `${2 + event.time.hour * 12 + event.time.minute / 5} / span ${
          event.duration * 12
        }`,
      }}
      className='relative z-20 mt-px flex dark:before:pointer-events-none dark:before:absolute dark:before:inset-1 dark:before:z-0 dark:before:rounded-lg dark:before:bg-gray-900'
      onClick={() => {
        setSelectedEvent(event);
        setIsDetailsOpen(true);
      }}
    >
      <button
        // href='#'
        className='group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs/5 hover:bg-blue-100 dark:bg-blue-600/15 dark:hover:bg-blue-600/20'
      >
        <p className='order-1 font-semibold text-blue-700 dark:text-blue-300'>
          {event.type}
        </p>
        <p className='text-blue-500 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300'>
          <time dateTime='2022-01-22T06:00'>
            {String(event.time?.hour).padStart(2, '0')}:
            {String(event.time?.minute).padStart(2, '0')}
          </time>
        </p>
      </button>
    </li>
  );
}

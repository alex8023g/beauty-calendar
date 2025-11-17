import type { Event } from '@/types';
import dayjs from 'dayjs';

export function EventsListItem({ event }: { event: Event }) {
  return (
    <li
      key={event.id}
      className='relative bg-white px-4 py-5 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-inset hover:bg-gray-50'
    >
      <div className='flex justify-between space-x-3'>
        <div className='min-w-0 flex-1'>
          <div className='block focus:outline-hidden'>
            <span aria-hidden='true' className='absolute inset-0' />
            <p className='truncate text-sm font-medium text-gray-900'>
              {event.type}
            </p>
            <p className='truncate text-sm text-gray-500'>
              {' '}
              {dayjs(event.dateString).format('DD MMMM ')}
            </p>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          <time
            dateTime={event.dateString}
            className='shrink-0 text-sm whitespace-nowrap text-gray-500'
          >
            {event.time.hour}: {String(event.time?.minute).padStart(2, '0')}
          </time>
          <div className='text-sm text-gray-500'>
            {' '}
            {dayjs(event.dateString).format('dddd')}
          </div>
        </div>
      </div>
      {/* <div className='mt-1'>
        <p className='line-clamp-2 text-sm text-gray-600'>
          {dayjs(event.dateString).format('DD MMMM ')}
        </p>
      </div> */}
    </li>
  );
}

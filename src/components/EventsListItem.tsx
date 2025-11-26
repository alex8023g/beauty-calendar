import { defaultDay } from '@/constants/eventConstants';
import { useEventsStore, useStatesStore } from '@/stores/zuStore';
import type { Event } from '@/types';
import dayjs from 'dayjs';

export function EventsListItem({ event }: { event: Event }) {
  const setSelectedEvent = useEventsStore((state) => state.setSelectedEvent);
  const setIsDetailsOpen = useStatesStore((state) => state.setIsDetailsOpen);
  const setSelectedDay = useStatesStore((state) => state.setSelectedDay);
  const setIsDayScheduleOpen = useStatesStore(
    (state) => state.setIsDayScheduleOpen,
  );

  function getTitle() {
    const commentsStart = event.comments.substring(0, 15);
    const commentsLength = event.comments.length;
    if (event.type !== 'Другое') {
      return event.type;
    } else {
      if (commentsLength === 0) {
        return 'Другое';
      } else {
        if (commentsLength > 15) {
          return commentsStart + '...';
        } else {
          return commentsStart;
        }
      }
    }
  }

  return (
    <li
      key={event.id}
      className='relative bg-white px-4 py-5 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-inset hover:bg-gray-50'
      onClick={() => {
        setSelectedEvent(event);
        setIsDayScheduleOpen(true);
        setIsDetailsOpen(true);
        setSelectedDay({ ...defaultDay, dateString: event.dateString });
      }}
    >
      <div className='flex justify-between space-x-3'>
        <div className='min-w-0 flex-1'>
          <div className='block focus:outline-hidden'>
            <span aria-hidden='true' className='absolute inset-0' />
            <p className='truncate text-sm font-medium text-gray-900'>
              {getTitle()}
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
            {event.time.hour}:{String(event.time?.minute).padStart(2, '0')}
          </time>
          <div className='text-sm text-gray-500'>
            {' '}
            {dayjs(event.dateString).format('dddd')}
          </div>
        </div>
      </div>
    </li>
  );
}

import { EventDetails } from './EventDetails';
import type { Day } from '@/lib/createYearCalendar';
import dayjs from 'dayjs';
import 'dayjs/locale/ru.js'; // Importing Russian locale for dayjs
dayjs.locale('ru');

export function DaySchedule2({ day }: { day: Day }) {
  return (
    <div className='flex h-full flex-col'>
      <div className='relative isolate flex flex-auto overflow-hidden bg-white dark:bg-gray-900'>
        <div className='flex flex-auto flex-col overflow-auto'>
          <div className='absolute top-0 left-0 z-40 flex h-full w-full flex-col bg-white p-4 pt-0 transition duration-300 ease-in data-closed:opacity-0 dark:bg-gray-900'>
            <EventDetails
              day={day}
              // event={event}
              // setEvent={setEvent}
              // events={events}
              // setEvents={setEvents}
              // setIsDetailsOpen={setIsDetailsOpen}
              variant='forEventsList'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

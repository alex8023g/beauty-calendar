import { Hour } from './Hour';
import { EventDetails } from './EventDetails';
import { EventItem } from './EventItem';
import type { Day } from '@/lib/createYearCalendar';
import dayjs from 'dayjs';
import { useEventsStore, useStatesStore } from '@/stores/zuStore';
import { Transition } from '@headlessui/react';
import 'dayjs/locale/ru.js'; // Importing Russian locale for dayjs
dayjs.locale('ru');
export type Time = { hour: number; minute: number };

export function DaySchedule({ day }: { day: Day }) {
  // const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const events = useEventsStore((state) => state.events);
  const setDefaultEvent = useEventsStore((state) => state.setDefaultEvent);
  const isDetailsOpen = useStatesStore((state) => state.isDetailsOpen);
  const setIsDetailsOpen = useStatesStore((state) => state.setIsDetailsOpen);
  const todayEvents = events.filter(
    (event) => event.dateString === day.dateString,
  );

  return (
    <div className='flex h-full flex-col'>
      {/* <header className='flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-white/10 dark:bg-gray-800/50 dark:max-md:border-white/15'>
        <div>
          <h1 className='text-base font-semibold text-gray-900 dark:text-white'>
            <time dateTime={day.dateString} className=''>
              {dayjs(day.dateString).format('DD MMMM YYYY')}
            </time>
          </h1>
          <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
            {dayjs(day.dateString).format('dddd')}
          </p>
        </div>
      </header> */}

      <div className='relative isolate flex flex-auto overflow-hidden bg-white dark:bg-gray-900'>
        {/* {todayEvents.length > 0 && !isDetailsOpen && (
          <div className='/right-0 absolute top-0 left-0 z-50 m-2 w-[360px] rounded-md bg-blue-300 pl-3 text-sm/6'>
            {todayEvents.map((event) => (
              <div key={event.id} className=''>
                <span>{String(event.time?.hour).padStart(2, '0')}:</span>
                <span>{String(event.time?.minute).padStart(2, '0')} </span>
                <span>{event.type}</span>
              </div>
            ))}
          </div>
        )} */}
        <div className='flex flex-auto flex-col overflow-auto'>
          {todayEvents.length > 0 && (
            <div className='sticky top-0 z-30 m-2 w-[360px] rounded-md bg-blue-300 pl-3 text-sm/6'>
              {todayEvents.map((event) => (
                <div key={event.id} className=''>
                  <span>{String(event.time?.hour).padStart(2, '0')}:</span>
                  <span>{String(event.time?.minute).padStart(2, '0')} </span>
                  <span>{event.type}</span>
                </div>
              ))}
            </div>
          )}
          <div className='flex w-full flex-auto'>
            <div className='w-14 flex-none bg-white ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-white/5' />
            <div className='grid flex-auto grid-cols-1 grid-rows-1'>
              {/* Horizontal lines */}
              <div
                style={{
                  gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))',
                }}
                className='col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100 dark:divide-white/5'
              >
                <div className='row-end-1 h-7' />
                {new Array(24).fill(0).map((_, i) => (
                  <Hour
                    key={i}
                    hour={i}
                    // day={day}
                    // setTime={setTime}
                    setIsDetailsOpen={setIsDetailsOpen}
                    // setEvent={setEvent}
                  />
                ))}
              </div>

              {/* Events */}
              {todayEvents.length > 0 && (
                <ol
                  style={{
                    gridTemplateRows:
                      '1.75rem repeat(288, minmax(0, 1fr)) auto',
                  }}
                  className='col-start-1 col-end-2 row-start-1 grid grid-cols-1'
                >
                  {todayEvents.map((event) => (
                    <EventItem
                      key={event.id}
                      event={event}
                      setIsDetailsOpen={setIsDetailsOpen}
                    />
                  ))}
                </ol>
              )}
            </div>
          </div>
          {/* )} */}
          {/* {isDetailsOpen && ( */}
          <Transition show={isDetailsOpen} afterLeave={setDefaultEvent}>
            <div className='absolute top-0 left-0 z-40 flex h-full w-full flex-col bg-white p-4 pt-0 transition duration-300 ease-in data-closed:opacity-0 dark:bg-gray-900'>
              <EventDetails
                day={day}
                // event={event}
                // setEvent={setEvent}
                events={events}
                // setEvents={setEvents}
                setIsDetailsOpen={setIsDetailsOpen}
              />
            </div>
          </Transition>
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

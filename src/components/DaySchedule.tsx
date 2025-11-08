import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Hour } from './Hour';
import { useState } from 'react';
import { EventDetails } from './EventDetails';
import { EventItem } from './EventItem';
import type { Day } from '@/lib/createYearCalendar';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { useEventsStore } from '@/store/store';

export type Time = { hour: number; minute: number };

export type Event = {
  id: string;
  dateString: string;
  time: { hour: number; minute: number };
  type: string;
  duration: number;
  remainderOne: number;
  remainderTwo: number;
};

export function DaySchedule({ day }: { day: Day }) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [event, setEvent] = useState<Event>({
    id: nanoid(),
    dateString: day.dateString,
    time: { hour: 0, minute: 0 },
    type: 'Маникюр',
    duration: 1,
    remainderOne: 2,
    remainderTwo: 24,
  });
  // const [events, setEvents] = useState<Event[]>([]);
  const events = useEventsStore((state) => state.events);
  // useEffect(() => {
  //   (async () => {
  //     const { value } = await Preferences.get({ key: 'events' });
  //     if (value) {
  //       setEvents(JSON.parse(value));
  //     }
  //   })();
  // }, []);
  return (
    <div className='flex h-full flex-col'>
      <header className='flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-white/10 dark:bg-gray-800/50 dark:max-md:border-white/15'>
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
        <div className='flex items-center'>
          <div className='relative flex items-center rounded-md bg-white shadow-xs outline -outline-offset-1 outline-gray-300 md:items-stretch dark:bg-white/10 dark:shadow-none dark:outline-white/5'>
            <button
              type='button'
              className='flex h-9 w-12 items-center justify-center rounded-l-md pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50 dark:hover:text-white dark:md:hover:bg-white/10'
            >
              <span className='sr-only'>Previous day</span>
              <ChevronLeftIcon aria-hidden='true' className='size-5' />
            </button>
            <button
              type='button'
              className='hidden px-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 focus:relative md:block dark:text-white dark:hover:bg-white/10'
            >
              Today
            </button>
            <span className='relative -mx-px h-5 w-px bg-gray-300 md:hidden dark:bg-white/10' />
            <button
              type='button'
              className='flex h-9 w-12 items-center justify-center rounded-r-md pl-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pl-0 md:hover:bg-gray-50 dark:hover:text-white dark:md:hover:bg-white/10'
            >
              <span className='sr-only'>Next day</span>
              <ChevronRightIcon aria-hidden='true' className='size-5' />
            </button>
          </div>
        </div>
      </header>
      <div className='isolate flex flex-auto overflow-hidden bg-white dark:bg-gray-900'>
        <div className='flex flex-auto flex-col overflow-auto'>
          {!isDetailsOpen && (
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
                      // setTime={setTime}
                      setIsDetailsOpen={setIsDetailsOpen}
                      setEvent={setEvent}
                    />
                  ))}
                </div>

                {/* Events */}
                {events.length > 0 && (
                  <ol
                    style={{
                      gridTemplateRows:
                        '1.75rem repeat(288, minmax(0, 1fr)) auto',
                    }}
                    className='col-start-1 col-end-2 row-start-1 grid grid-cols-1'
                  >
                    {/* <EventItem
                    event={{
                      dateString: '2025-11-14',
                      type: 'Маникюр',
                      time: { hour: 4, minute: 30 },
                      duration: 1.25,
                    }}
                  /> */}
                    {events
                      .filter((event) => event.dateString === day.dateString)
                      .map((event) => (
                        <EventItem key={event.dateString} event={event} />
                      ))}
                  </ol>
                )}
              </div>
            </div>
          )}
          {isDetailsOpen && (
            <div className='flex w-full flex-col p-4 pt-0'>
              {/* <div>
                время: {time.hour}:{time.minute}
              </div>
              <div> услуга: маникюр </div>
              <div> напомнить: за 2 часа </div>
              <div> напомнить: за 1 день </div>
              <div className='flex gap-2 mt-4'>
                <Button variant='outline'>Отменить</Button>
                <Button variant='default'>Добавить</Button>
              </div> */}
              <EventDetails
                event={event}
                setEvent={setEvent}
                events={events}
                // setEvents={setEvents}
                setIsDetailsOpen={setIsDetailsOpen}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

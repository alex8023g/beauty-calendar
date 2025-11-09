import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { DaySchedule } from '@/components/DaySchedule';
import type { Day } from '@/lib/createYearCalendar';
import dayjs from 'dayjs';
import { useEventsStore } from '@/store/store';
import { useEffect, useRef } from 'react';

const todayDateString = dayjs().format('YYYY-MM-DD');

export function DayBtn({ day }: { day: Day }) {
  const events = useEventsStore((state) => state.events);
  const el = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (todayDateString === day.dateString) {
      el.current?.scrollIntoView({ block: 'center' });
    }
  }, []);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          key={day.dateString}
          ref={el}
          type='button'
          data-is-today={todayDateString === day.dateString ? '' : undefined}
          // data-is-current-month={day?.monthDay ? '' : undefined}
          data-is-current-month=''
          className='relative bg-gray-50 py-1.5 text-gray-400 first:rounded-tl-lg last:rounded-br-lg hover:bg-gray-100 focus:z-10 data-is-current-month:bg-white data-is-current-month:text-gray-900 data-is-current-month:hover:bg-gray-100 nth-36:rounded-bl-lg nth-7:rounded-tr-lg dark:bg-gray-900/75 dark:text-gray-500 dark:hover:bg-gray-900/25 dark:data-is-current-month:bg-gray-900 dark:data-is-current-month:text-gray-100 dark:data-is-current-month:hover:bg-gray-900/50'
          style={{
            color: day?.isWeekend ? 'red' : day?.isHoliday ? 'red' : '',
          }}
        >
          <time
            dateTime={day.dateString}
            className='mx-auto flex size-7 items-center justify-center rounded-full in-data-is-today:bg-indigo-600 in-data-is-today:font-semibold in-data-is-today:text-white dark:in-data-is-today:bg-indigo-500'
          >
            {day.dateString?.split('-').pop()?.replace(/^0/, '')}
          </time>
          {events.some((event) => event.dateString === day.dateString) && (
            <div className='absolute bottom-1 left-4 w-3 font-bold text-red-600'>
              __
            </div>
          )}
        </button>
      </SheetTrigger>
      <SheetContent side='bottom' className='h-11/12'>
        <SheetHeader className='pb-0'>
          <SheetTitle></SheetTitle>
          {/* <SheetDescription>
            This action cannot be undone. This will permanently delete your account and
            remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>
        <DaySchedule day={day} />
      </SheetContent>
    </Sheet>
  );
}

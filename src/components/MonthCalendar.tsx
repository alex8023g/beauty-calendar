import { DayBtn } from '@/components/DayBtn';
import type { Month } from '@/lib/createYearCalendar';

export function MonthCalendar({ month }: { month: Month }) {
  return (
    <section key={month.monthName} className='text-center'>
      <h2 className='text-sm font-semibold text-gray-900 dark:text-white'>
        {month.monthName}
      </h2>
      <div className='mt-6 grid grid-cols-7 text-xs/6 text-gray-500 dark:text-gray-400'>
        <div>П</div>
        <div>В</div>
        <div>С</div>
        <div>Ч</div>
        <div>П</div>
        <div>С</div>
        <div>В</div>
      </div>
      <div className='isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow-sm ring-1 ring-gray-200 dark:bg-white/10 dark:shadow-none dark:ring-white/10'>
        {month.days.map((day, i) =>
          day.dateString ? (
            <DayBtn key={day.dateString} day={day} />
          ) : (
            <button
              key={i}
              type='button'
              // data-is-today=''
              // data-is-current-month={day?.monthDay ? '' : undefined}
              data-is-current-month={undefined}
              className='relative bg-gray-50 py-1.5 text-gray-400 first:rounded-tl-lg last:rounded-br-lg hover:bg-gray-100 focus:z-10 data-is-current-month:bg-white data-is-current-month:text-gray-900 data-is-current-month:hover:bg-gray-100 nth-36:rounded-bl-lg nth-7:rounded-tr-lg dark:bg-gray-900/75 dark:text-gray-500 dark:hover:bg-gray-900/25 dark:data-is-current-month:bg-gray-900 dark:data-is-current-month:text-gray-100 dark:data-is-current-month:hover:bg-gray-900/50'
            >
              <time
                dateTime={day.dateString}
                className='mx-auto flex size-7 items-center justify-center rounded-full in-data-is-today:bg-indigo-600 in-data-is-today:font-semibold in-data-is-today:text-white dark:in-data-is-today:bg-indigo-500'
              >
                {day.dateString?.split('-').pop()?.replace(/^0/, '')}
              </time>
            </button>
          ),
        )}
      </div>
    </section>
  );
}

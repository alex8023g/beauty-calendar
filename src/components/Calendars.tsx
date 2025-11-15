// import { createYearCalendar, type Month } from '@/lib/createYearCalendar';
// import { createDaysArr } from '@/lib/createDaysArr';
// import { useEffect, useState } from 'react';
import { MonthCalendar } from './MonthCalendar';
import { monthsInitial } from '@/constants/months';

export function Calendars() {
  // const [months2, setMonths2] = useState<Month[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     const days = await createDaysArr({ year: 2026 });
  //     console.log('🚀 ~ days:', days);
  //     const monthsSt = createYearCalendar({ year: 2026, days });
  //     console.log('🚀 ~ monthsSt:', monthsSt);
  //     setMonths2(monthsSt);
  //   })();
  // }, []);

  return (
    // <div>
    <div className='bg-white dark:bg-gray-900'>
      <div className='mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-12 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4'>
        {monthsInitial.map((month) => (
          <MonthCalendar key={month.monthName + month.year} month={month} />
        ))}
      </div>
    </div>
    // </div>
  );
}

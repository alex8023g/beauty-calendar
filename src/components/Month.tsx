import type { Month } from '../constants/constants';
import { DayBtn } from '@/components/DayBtn';

export function Month({ month }: { month: Month }) {
  return (
    <section key={month.name} className='text-center'>
      <h2 className='text-sm font-semibold text-gray-900 dark:text-white'>
        {month.name}
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
        {month.days.map((day) => (
          <DayBtn key={day.date} day={day} />
        ))}
      </div>
    </section>
  );
}

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { DaySchedule } from '@/components/DaySchedule';
import type { Day } from '@/constants/constants';

export function DayBtn({ day }: { day: Day }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          key={day.date}
          type='button'
          data-is-today={day.isToday ? '' : undefined}
          data-is-current-month={day.isCurrentMonth ? '' : undefined}
          className='relative bg-gray-50 py-1.5 text-gray-400 first:rounded-tl-lg last:rounded-br-lg hover:bg-gray-100 focus:z-10 data-is-current-month:bg-white data-is-current-month:text-gray-900 data-is-current-month:hover:bg-gray-100 nth-36:rounded-bl-lg nth-7:rounded-tr-lg dark:bg-gray-900/75 dark:text-gray-500 dark:hover:bg-gray-900/25 dark:data-is-current-month:bg-gray-900 dark:data-is-current-month:text-gray-100 dark:data-is-current-month:hover:bg-gray-900/50'
        >
          <time
            dateTime={day.date}
            className='mx-auto flex size-7 items-center justify-center rounded-full in-data-is-today:bg-indigo-600 in-data-is-today:font-semibold in-data-is-today:text-white dark:in-data-is-today:bg-indigo-500'
          >
            {day.date?.split('-').pop()?.replace(/^0/, '')}
          </time>
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
        <DaySchedule />
      </SheetContent>
    </Sheet>
  );
}

import { ChevronDownIcon } from '@heroicons/react/16/solid';
import type { Dispatch, SetStateAction } from 'react';
import type { Event } from './DaySchedule';

export function SelectEventType({
  event,
  setEvent,
}: {
  event: Event;
  setEvent: Dispatch<SetStateAction<Event>>;
}) {
  return (
    <>
      {/* <div className=' grid grid-cols-1'> */}
      <div className='flex justify-end'>
        <select
          id='EventType'
          name='EventType'
          value={event.type}
          dir='rtl'
          className='/py-1.5 /outline-1 /-outline-offset-1 /outline-gray-300 /focus-visible:outline-indigo-600 /dark:focus-visible:outline-indigo-500 col-start-1 row-start-1 w-full appearance-none justify-self-end rounded-md bg-white pr-1 pl-3 text-sm/6 text-gray-700 focus-visible:outline-0 focus-visible:-outline-offset-2 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800'
          onChange={(e) => setEvent({ ...event, type: e.target.value })}
        >
          <option>Маникюр</option>
          <option>Педикюр</option>
          <option>Брови</option>
          <option>Ресницы</option>
          <option>Массаж</option>
        </select>
        <ChevronDownIcon
          aria-hidden='true'
          className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400'
        />
      </div>
    </>
  );
}

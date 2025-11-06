import type { Dispatch, SetStateAction } from 'react';
import type { Event } from './DaySchedule';

export function Hour({
  hour,
  setIsDetailsOpen,
  setEvent,
}: {
  hour: number;
  setIsDetailsOpen: Dispatch<SetStateAction<boolean>>;
  setEvent: Dispatch<SetStateAction<Event>>;
}) {
  return (
    <>
      <div
        className='z-10'
        onClick={() => {
          console.log('clicked', hour);
          // setTime({ hour: String(hour).padStart(2, '0'), minute: '00' });
          // setTime({ hour, minute: 0 });
          setEvent((prev) => ({
            ...prev,
            time: { hour, minute: 0 },
          }));
          setIsDetailsOpen(true);
        }}
      >
        <div className='-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400 dark:text-gray-500'>
          {hour}:00
        </div>
      </div>
      <div
        className='z-10'
        // onClick={() => setTime({ hour: String(hour).padStart(2, '0'), minute: '30' })}
        onClick={() => {
          // setTime({ hour, minute: 30 });
          setEvent((prev) => ({
            ...prev,
            time: { hour, minute: 30 },
          }));
          setIsDetailsOpen(true);
        }}
      />
    </>
  );
}

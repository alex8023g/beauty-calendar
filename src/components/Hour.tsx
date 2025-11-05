import type { Dispatch, SetStateAction } from 'react';

export function Hour({
  hour,
  setTime,
}: {
  hour: number;
  setTime: Dispatch<SetStateAction<{ hour: string; minute: string } | null>>;
}) {
  return (
    <>
      <div
        className=' z-10'
        onClick={() => {
          console.log('clicked', hour);
          setTime({ hour: String(hour).padStart(2, '0'), minute: '00' });
        }}
      >
        <div className='-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400 dark:text-gray-500'>
          {hour}:00
        </div>
      </div>
      <div
        className='z-10'
        onClick={() => setTime({ hour: String(hour).padStart(2, '0'), minute: '30' })}
      />
    </>
  );
}

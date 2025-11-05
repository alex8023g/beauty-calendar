import { ChevronDownIcon } from '@heroicons/react/16/solid';

export function SelectEventType() {
  return (
    <>
      {/* <div className=' grid grid-cols-1'> */}
      <div className=' flex justify-end'>
        <select
          id='EventType'
          name='EventType'
          defaultValue='Маникюр'
          dir='rtl'
          className='col-start-1 row-start-1 w-full appearance-none rounded-md bg-white /py-1.5 pr-1 pl-3 text-sm/6  text-gray-700 /outline-1 /-outline-offset-1 /outline-gray-300 focus-visible:outline-0 focus-visible:-outline-offset-2 /focus-visible:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:*:bg-gray-800 /dark:focus-visible:outline-indigo-500 justify-self-end'
          onChange={(e) => console.log(e.target.value)}
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

import { createYearCalendar, type Month } from '@/lib/createYearCalendar';
import { createDaysArr } from '@/lib/createDaysArr';
import { useEffect, useState } from 'react';
import { MonthCalendar } from './MonthCalendar';

export function Calendars() {
  const [months2, setMonths2] = useState<Month[]>([]);

  useEffect(() => {
    (async () => {
      const days = await createDaysArr({ year: 2025 });
      console.log('🚀 ~ days:', days);
      const monthsSt = createYearCalendar({ year: 2025, days });
      console.log('🚀 ~ monthsSt:', monthsSt);
      setMonths2(monthsSt);
    })();
  }, []);

  return (
    <div>
      {/* <header className='flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-white/10 dark:bg-gray-800/50'>
        <h1 className='text-base font-semibold text-gray-900 dark:text-white'>
          <time dateTime='2022'>2022</time>
        </h1>
        <div className='flex items-center'>
          <div className='relative flex items-center rounded-md bg-white shadow-xs outline -outline-offset-1 outline-gray-300 md:items-stretch dark:bg-white/10 dark:shadow-none dark:outline-white/5'>
            <button
              type='button'
              className='flex h-9 w-12 items-center justify-center rounded-l-md pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50 dark:hover:text-white dark:md:hover:bg-white/10'
            >
              <span className='sr-only'>Previous year</span>
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
              <span className='sr-only'>Next year</span>
              <ChevronRightIcon aria-hidden='true' className='size-5' />
            </button>
          </div>
          <div className='hidden md:ml-4 md:flex md:items-center'>
            <Menu as='div' className='relative'>
              <MenuButton
                type='button'
                className='flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20'
              >
                Year view
                <ChevronDownIcon
                  aria-hidden='true'
                  className='-mr-1 size-5 text-gray-400'
                />
              </MenuButton>

              <MenuItems
                transition
                className='absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/5'
              >
                <div className='py-1'>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white'
                    >
                      Day view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white'
                    >
                      Week view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white'
                    >
                      Month view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white'
                    >
                      Year view
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
            <div className='ml-6 h-6 w-px bg-gray-300 dark:bg-white/10' />
            <button
              type='button'
              className='ml-6 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500'
            >
              Add event
            </button>
          </div>
          <div className='ml-6 md:hidden'>
            <Menu as='div' className='relative'>
              <MenuButton className='relative flex items-center rounded-full text-gray-400 outline-offset-8 hover:text-gray-500 dark:text-gray-400 dark:hover:text-white'>
                <span className='absolute -inset-2' />
                <span className='sr-only'>Open menu</span>
                <EllipsisHorizontalIcon aria-hidden='true' className='size-5' />
              </MenuButton>

              <MenuItems
                transition
                className='absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:divide-white/10 dark:bg-gray-800 dark:-outline-offset-1 dark:outline-white/5'
              >
                <div className='py-1'>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white'
                    >
                      Create event
                    </a>
                  </MenuItem>
                </div>
                <div className='py-1'>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white'
                    >
                      Go to today
                    </a>
                  </MenuItem>
                </div>
                <div className='py-1'>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white'
                    >
                      Day view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white'
                    >
                      Week view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white'
                    >
                      Month view
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden dark:text-gray-300 dark:data-focus:bg-white/5 dark:data-focus:text-white'
                    >
                      Year view
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </header> */}
      <div className='bg-white dark:bg-gray-900'>
        <div className='mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 px-4 py-16 sm:grid-cols-2 sm:px-6 xl:max-w-none xl:grid-cols-3 xl:px-8 2xl:grid-cols-4'>
          {months2.map((month) => (
            <MonthCalendar key={month.monthName} month={month} />
          ))}
        </div>
      </div>
    </div>
  );
}

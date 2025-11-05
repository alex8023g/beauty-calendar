import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Hour } from './Hour';
import { useState } from 'react';
import Task from './Task';

export default function TimePicker() {
  const [time, setTime] = useState<{ hour: string; minute: string } | null>(null);
  return (
    <div className='flex h-full flex-col'>
      <header className='flex flex-none items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-white/10 dark:bg-gray-800/50 dark:max-md:border-white/15'>
        <div>
          <h1 className='text-base font-semibold text-gray-900 dark:text-white'>
            <time dateTime='2022-01-22' className='sm:hidden'>
              14 ноября 2026
            </time>
            <time dateTime='2022-01-22' className='hidden sm:inline'>
              14 ноября 2026
            </time>
          </h1>
          <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>пятница</p>
        </div>
        <div className='flex items-center'>
          <div className='relative flex items-center rounded-md bg-white shadow-xs outline -outline-offset-1 outline-gray-300 md:items-stretch dark:bg-white/10 dark:shadow-none dark:outline-white/5'>
            <button
              type='button'
              className='flex h-9 w-12 items-center justify-center rounded-l-md pr-1 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:pr-0 md:hover:bg-gray-50 dark:hover:text-white dark:md:hover:bg-white/10'
            >
              <span className='sr-only'>Previous day</span>
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
              <span className='sr-only'>Next day</span>
              <ChevronRightIcon aria-hidden='true' className='size-5' />
            </button>
          </div>
          {/* <div className='hidden md:ml-4 md:flex md:items-center'>
            <Menu as='div' className='relative'>
              <MenuButton
                type='button'
                className='flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20'
              >
                Day view
                <ChevronDownIcon
                  aria-hidden='true'
                  className='-mr-1 size-5 text-gray-400'
                />
              </MenuButton>

              <MenuItems
                transition
                className='absolute right-0 z-10 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-800 dark:-outline-offset-1 dark:outline-white/10'
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
          </div> */}
          {/* <div className='ml-6 md:hidden'>
            <Menu as='div' className='relative'>
              <MenuButton className='relative flex items-center rounded-full text-gray-400 outline-offset-8 hover:text-gray-500 dark:text-gray-500 dark:hover:text-white'>
                <span className='absolute -inset-2' />
                <span className='sr-only'>Open menu</span>
                <EllipsisHorizontalIcon aria-hidden='true' className='size-5' />
              </MenuButton>

              <MenuItems
                transition
                className='absolute right-0 z-10 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:divide-white/10 dark:bg-gray-800 dark:-outline-offset-1 dark:outline-white/10'
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
          </div> */}
        </div>
      </header>
      <div className='isolate flex flex-auto overflow-hidden bg-white dark:bg-gray-900'>
        <div className='flex flex-auto flex-col overflow-auto'>
          {/* <div className='sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow-sm ring-1 ring-black/5 md:hidden dark:bg-gray-900 dark:text-gray-400 dark:shadow-none dark:ring-white/20'>
            <button type='button' className='flex flex-col items-center pt-3 pb-1.5'>
              <span>W</span>

              <span className='mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900 dark:text-white'>
                19
              </span>
            </button>
            <button type='button' className='flex flex-col items-center pt-3 pb-1.5'>
              <span>T</span>
              <span className='mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-indigo-600 dark:text-indigo-400'>
                20
              </span>
            </button>
            <button type='button' className='flex flex-col items-center pt-3 pb-1.5'>
              <span>F</span>
              <span className='mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900 dark:text-white'>
                21
              </span>
            </button>
            <button type='button' className='flex flex-col items-center pt-3 pb-1.5'>
              <span>S</span>
              <span className='mt-3 flex size-8 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white dark:bg-white dark:text-gray-900'>
                22
              </span>
            </button>
            <button type='button' className='flex flex-col items-center pt-3 pb-1.5'>
              <span>S</span>
              <span className='mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900 dark:text-white'>
                23
              </span>
            </button>
            <button type='button' className='flex flex-col items-center pt-3 pb-1.5'>
              <span>M</span>
              <span className='mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900 dark:text-white'>
                24
              </span>
            </button>
            <button type='button' className='flex flex-col items-center pt-3 pb-1.5'>
              <span>T</span>
              <span className='mt-3 flex size-8 items-center justify-center rounded-full text-base font-semibold text-gray-900 dark:text-white'>
                25
              </span>
            </button>
          </div> */}
          {!time && (
            <div className='flex w-full flex-auto'>
              <div className='w-14 flex-none bg-white ring-1 ring-gray-100 dark:bg-gray-900 dark:ring-white/5' />
              <div className='grid flex-auto grid-cols-1 grid-rows-1'>
                {/* Horizontal lines */}
                <div
                  style={{ gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))' }}
                  className='col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100 dark:divide-white/5'
                >
                  <div className='row-end-1 h-7' />
                  {new Array(24).fill(0).map((_, i) => (
                    <Hour key={i} hour={i} setTime={setTime} />
                  ))}
                </div>

                {/* Events */}
                <ol
                  style={{ gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto' }}
                  className='col-start-1 col-end-2 row-start-1 grid grid-cols-1'
                >
                  <li
                    style={{ gridRow: '74 / span 12' }}
                    className='relative mt-px flex dark:before:pointer-events-none dark:before:absolute dark:before:inset-1 dark:before:z-0 dark:before:rounded-lg dark:before:bg-gray-900'
                  >
                    <a
                      href='#'
                      className='group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xs/5 hover:bg-blue-100 dark:bg-blue-600/15 dark:hover:bg-blue-600/20'
                    >
                      <p className='order-1 font-semibold text-blue-700 dark:text-blue-300'>
                        Breakfast
                      </p>
                      <p className='text-blue-500 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300'>
                        <time dateTime='2022-01-22T06:00'>6:00 AM</time>
                      </p>
                    </a>
                  </li>
                  <li
                    style={{ gridRow: '92 / span 30' }}
                    className='relative mt-px flex dark:before:pointer-events-none dark:before:absolute dark:before:inset-1 dark:before:z-0 dark:before:rounded-lg dark:before:bg-gray-900'
                  >
                    <a
                      href='#'
                      className='group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-2 text-xs/5 hover:bg-pink-100 dark:bg-pink-600/15 dark:hover:bg-pink-600/20'
                    >
                      <p className='order-1 font-semibold text-pink-700 dark:text-pink-300'>
                        Flight to Paris
                      </p>
                      <p className='order-1 text-pink-500 group-hover:text-pink-700 dark:text-pink-400 dark:group-hover:text-pink-300'>
                        John F. Kennedy International Airport
                      </p>
                      <p className='text-pink-500 group-hover:text-pink-700 dark:text-pink-400 dark:group-hover:text-pink-300'>
                        <time dateTime='2022-01-22T07:30'>7:30 AM</time>
                      </p>
                    </a>
                  </li>
                  <li
                    style={{ gridRow: '134 / span 18' }}
                    className='relative mt-px flex dark:before:pointer-events-none dark:before:absolute dark:before:inset-1 dark:before:z-0 dark:before:rounded-lg dark:before:bg-gray-900'
                  >
                    <a
                      href='#'
                      className='group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xs/5 hover:bg-indigo-100 dark:bg-indigo-600/15 dark:hover:bg-indigo-600/20'
                    >
                      <p className='order-1 font-semibold text-indigo-700 dark:text-indigo-300'>
                        Sightseeing
                      </p>
                      <p className='order-1 text-indigo-500 group-hover:text-indigo-700 dark:text-indigo-400 dark:group-hover:text-indigo-300'>
                        Eiffel Tower
                      </p>
                      <p className='text-indigo-500 group-hover:text-indigo-700 dark:text-indigo-400 dark:group-hover:text-indigo-300'>
                        <time dateTime='2022-01-22T11:00'>11:00 AM</time>
                      </p>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          )}
          {time && (
            <div className='flex w-full flex-col p-4 pt-0'>
              {/* <div>
                время: {time.hour}:{time.minute}
              </div>
              <div> услуга: маникюр </div>
              <div> напомнить: за 2 часа </div>
              <div> напомнить: за 1 день </div>
              <div className='flex gap-2 mt-4'>
                <Button variant='outline'>Отменить</Button>
                <Button variant='default'>Добавить</Button>
              </div> */}
              <Task />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

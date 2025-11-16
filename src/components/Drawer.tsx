// import { useState } from 'react';
import { useEventsStore } from '@/stores/zuStore';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { DaySchedule } from './DaySchedule';
import dayjs from 'dayjs';

export default function Drawer() {
  // const [open, setOpen] = useState(true);
  const isDayScheduleOpen = useEventsStore((state) => state.isDayScheduleOpen);
  const setIsDayScheduleOpen = useEventsStore(
    (state) => state.setIsDayScheduleOpen,
  );
  const selectedDay = useEventsStore((state) => state.selectedDay);

  return (
    <Dialog
      open={isDayScheduleOpen}
      onClose={setIsDayScheduleOpen}
      className='relative z-20'
    >
      <div className='fixed inset-0' />

      <div className='fixed inset-0 overflow-hidden'>
        <div className='absolute inset-0 overflow-hidden'>
          <div className='/pl-10 /sm:pl-16 /pt-10 pointer-events-none fixed inset-y-0 right-0 flex max-w-full overflow-y-hidden border border-green-500'>
            <DialogPanel
              transition
              className='pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-y-full sm:duration-700'
            >
              <div className='relative flex h-full flex-col overflow-y-hidden border-2 border-blue-500 bg-white pt-6 shadow-xl dark:bg-gray-800 dark:after:absolute dark:after:inset-y-0 dark:after:left-0 dark:after:w-px dark:after:bg-white/10'>
                <div className='px-4 sm:px-6'>
                  <div className='flex items-start justify-between'>
                    <DialogTitle className='text-base font-semibold text-gray-900 dark:text-white'>
                      <div>
                        <h1 className='text-base font-semibold text-gray-900 dark:text-white'>
                          <time dateTime={selectedDay.dateString} className=''>
                            {dayjs(selectedDay.dateString).format(
                              'DD MMMM YYYY',
                            )}
                          </time>
                        </h1>
                        <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
                          {dayjs(selectedDay.dateString).format('dddd')}
                        </p>
                      </div>
                    </DialogTitle>
                    <div className='ml-3 flex h-7 items-center'>
                      <button
                        type='button'
                        onClick={() => setIsDayScheduleOpen(false)}
                        className='relative rounded-md text-gray-400 hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:hover:text-white dark:focus-visible:outline-indigo-500'
                      >
                        <span className='absolute -inset-2.5' />
                        <span className='sr-only'>Close panel</span>
                        <XMarkIcon aria-hidden='true' className='size-6' />
                      </button>
                    </div>
                  </div>
                </div>
                <div className='/px-4 /flex-col /overflow-y-scroll relative mt-6 flex-1 border border-red-500 sm:px-6'>
                  <DaySchedule day={selectedDay} />
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

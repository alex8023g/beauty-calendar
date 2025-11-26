import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import { useEventsStore, useStatesStore } from '@/stores/zuStore';

export default function Drawer({ children }: { children: React.ReactNode }) {
  const isDayScheduleOpen = useStatesStore((state) => state.isDayScheduleOpen);
  const setIsDayScheduleOpen = useStatesStore(
    (state) => state.setIsDayScheduleOpen,
  );
  const selectedDay = useStatesStore((state) => state.selectedDay);
  const setIsDetailsOpen = useStatesStore((state) => state.setIsDetailsOpen);
  const setDefaultEvent = useEventsStore((state) => state.setDefaultEvent);

  return (
    <div>
      <Dialog
        open={isDayScheduleOpen}
        onClose={(e) => {
          setIsDayScheduleOpen(e);
          setDefaultEvent();
        }}
        className='relative z-20'
      >
        <DialogBackdrop
          transition
          className='fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0 dark:bg-gray-900/50'
        />

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='/pl-10 pointer-events-none fixed inset-y-0 right-0 flex max-w-full pt-10 sm:pl-16'>
              <DialogPanel
                transition
                className='pointer-events-auto w-screen max-w-md transform overflow-y-hidden transition duration-500 ease-in-out data-closed:translate-y-full sm:duration-700'
              >
                <div className='/py-6 relative flex h-full flex-col overflow-hidden bg-white shadow-xl dark:bg-gray-800 dark:after:absolute dark:after:inset-y-0 dark:after:left-0 dark:after:w-px dark:after:bg-white/10'>
                  <div className='/sticky /top-0 z-30 bg-white px-4 pt-4 sm:px-6'>
                    <div className='flex items-start justify-between'>
                      <DialogTitle className='text-base font-semibold text-gray-900 dark:text-white'>
                        <div>
                          <h1 className='text-base font-semibold text-gray-900 dark:text-white'>
                            <time
                              dateTime={selectedDay.dateString}
                              className=''
                            >
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
                          onClick={() => {
                            setIsDayScheduleOpen(false);
                            setIsDetailsOpen(false);
                          }}
                          className='relative rounded-md text-gray-400 hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:hover:text-white dark:focus-visible:outline-indigo-500'
                        >
                          <span className='absolute -inset-2.5' />
                          <span className='sr-only'>Close panel</span>
                          <XMarkIcon aria-hidden='true' className='size-6' />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='/px-4 relative mt-6 flex-1 overflow-y-scroll sm:px-6'>
                    {/* <DaySchedule day={selectedDay} /> */}
                    {children}
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

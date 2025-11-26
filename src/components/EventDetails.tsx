import { Button } from './ui/button';
import { SelectEventType } from './SelectEventType';
import { useMemo, useState } from 'react';
import { useEventsStore } from '@/stores/zuStore';
import type { Day } from '@/lib/createYearCalendar';
import { WheelTimePicker } from './WheelTimePicker';
import { SelectDuration } from './SelectDuration';
import SelectRemindBeforeOne from './SelectRemindBeforeOne';
import SelectRemindBeforeTwo from './SelectRemindBeforeTwo';
import Comments from './Comments';
import { CloseEventDetailsBtn } from './CloseEventDetailsBtn';
import { AddEventBtn } from './AddEventBtn';
import { DeleteEventBtn } from './DeleteEventBtn';
import { UpdEventBtn } from './UpdEventBtn';

export function EventDetails({
  day,
  // events,
  // setIsDetailsOpen,
  variant,
}: {
  day: Day;
  // events: Event[];
  // setIsDetailsOpen: (isOpen: boolean) => void;
  variant: 'forEventsList' | 'forDaySchedule';
}) {
  const selectedEvent = useEventsStore((state) => state.selectedEvent);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  // const isEventEdit = useEventsStore((state) => state.isEventEdit);
  // const setIsEventEdit = useEventsStore((state) => state.setIsEventEdit);
  const events = useEventsStore((state) => state.events);

  const isEventChanged = useMemo(() => {
    return (
      JSON.stringify(selectedEvent) !==
      JSON.stringify(events.find((event) => event.id === selectedEvent.id))
    );
  }, [selectedEvent, events]);
  return (
    <div className='flex h-full flex-col justify-between pb-10'>
      <div className='border-gray-100 dark:border-white/10'>
        <dl className='divide-gray-100 not-last:divide-y dark:divide-white/10'>
          <div
            className='relative'
            onClick={() => setIsTimePickerOpen((st) => !st)}
          >
            <div className='grid grid-cols-2 gap-4 px-0 py-4'>
              <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
                Время
              </dt>
              <dd className='/col-span-2 mt-0 text-right text-sm/6 text-gray-700 dark:text-gray-400'>
                {selectedEvent.time.hour}:
                {String(selectedEvent.time?.minute).padStart(2, '0')}
              </dd>
            </div>
            {/* {isTimePickerOpen && !selectedEvent.id && ( */}
            {isTimePickerOpen && (
              <div className='absolute top-12 -right-2'>
                <WheelTimePicker />
                <Button className='mt-2 w-full shadow-xl'>Закрыть</Button>
              </div>
            )}
          </div>
          <div className='grid grid-cols-2 gap-1 px-0 py-4'>
            <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Событие
            </dt>
            <dd className='/col-span-2 mt-0 text-right text-sm/6 text-gray-700 dark:text-gray-400'>
              <SelectEventType />
            </dd>
          </div>
          <div className='grid grid-cols-2 gap-4 px-0 py-4'>
            <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Продолжительность
            </dt>
            <dd className='/col-span-2 mt-0 text-right text-sm/6 text-gray-700 dark:text-gray-400'>
              <SelectDuration />
            </dd>
          </div>
          <div className='grid grid-cols-2 gap-4 px-0 py-4'>
            <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Напоминание 1
            </dt>
            <dd className='/col-span-2 mt-0 text-right text-sm/6 text-gray-700 dark:text-gray-400'>
              <SelectRemindBeforeOne />
            </dd>
          </div>
          <div className='grid grid-cols-2 gap-4 px-0 py-4'>
            <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Напоминание 2
            </dt>
            <dd className='/col-span-2 mt-0 text-right text-sm/6 text-gray-700 dark:text-gray-400'>
              <SelectRemindBeforeTwo />
            </dd>
          </div>
          <div className='py-4'>
            <Comments />
          </div>
        </dl>
      </div>

      {/* <div className='mt-4 flex gap-2'>
        {selectedEvent.id && (
          <Button variant='outline' className='grow'>
            Редактировать
          </Button>
        )}
        <CloseEventDetailsBtn variant={variant} />
        {selectedEvent.id && <DeleteEventBtn variant={variant} />}
        {!selectedEvent.id && <AddEventBtn day={day} />}
      </div> */}

      {selectedEvent.id && !isEventChanged && (
        <div className='mt-4 grid grid-cols-2 gap-2'>
          <DeleteEventBtn variant={variant} />
          <CloseEventDetailsBtn variant={variant} />
        </div>
      )}
      {selectedEvent.id && isEventChanged && (
        <div className='mt-4 grid grid-cols-2 gap-2'>
          <UpdEventBtn variant={variant} />
          <CloseEventDetailsBtn variant={variant} />
        </div>
      )}
      {!selectedEvent.id && (
        <div className='mt-4 flex gap-2'>
          <CloseEventDetailsBtn variant={variant} />
          <AddEventBtn day={day} />
        </div>
      )}
      {/* <div>
        {JSON.stringify(selectedEvent) ===
        JSON.stringify(events.find((event) => event.id === selectedEvent.id))
          ? 'true'
          : 'false'}
      </div> */}
    </div>
  );
}

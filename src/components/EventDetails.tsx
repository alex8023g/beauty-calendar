import { Button } from './ui/button';
import { SelectEventType } from './SelectEventType';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { useEventsStore } from '@/stores/zuStore';
import type { Event } from '@/types';
import { nanoid } from 'nanoid';
import { scheduleBasicNotification } from '@/lib/localNotifications';
import type { Day } from '@/lib/createYearCalendar';
import { WheelTimePicker } from './WheelTimePicker';
import { saveEventsToLocalStorage } from '@/stores/localStore';
import { SelectDuration } from './SelectDuration';
import SelectRemindBeforeOne from './SelectRemindBeforeOne';
import SelectRemindBeforeTwo from './SelectRemindBeforeTwo';

export function EventDetails({
  day,
  // event,
  // setEvent,
  events,
  setIsDetailsOpen,
}: {
  day: Day;
  // event: Event;
  // setEvent: Dispatch<SetStateAction<Event>>;
  events: Event[];
  setIsDetailsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const selectedEvent = useEventsStore((state) => state.selectedEvent);
  const setEvents = useEventsStore((state) => state.setEvents);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);

  return (
    <div className='flex h-full flex-col justify-between pb-10'>
      <div className='border-gray-100 dark:border-white/10'>
        <dl className='divide-y divide-gray-100 dark:divide-white/10'>
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
        </dl>
      </div>

      <div className='mt-4 flex gap-2'>
        <Button
          variant='outline'
          className='grow'
          onClick={() => {
            setIsDetailsOpen(false);
            // setDefaultEvent();
          }}
        >
          Закрыть
        </Button>
        {selectedEvent.id ? (
          <Button
            variant='destructive'
            className='grow'
            onClick={() => {
              const updEvents: Event[] = events.filter(
                (event) => event.id !== selectedEvent.id,
              );
              // Preferences.set({
              //   key: 'events',
              //   value: JSON.stringify(updEvents),
              // });
              saveEventsToLocalStorage(updEvents);
              // deleteEvent(selectedEvent.id);
              setEvents(updEvents);
              scheduleBasicNotification({
                events: updEvents,
              });
              setIsDetailsOpen(false);
            }}
          >
            Удалить
          </Button>
        ) : (
          <Button
            variant='default'
            className='grow'
            onClick={async () => {
              const updEvents: Event[] = [
                ...events,
                {
                  ...selectedEvent,
                  id: nanoid(),
                  dateString: day.dateString,
                },
              ];
              // Preferences.set({
              //   key: 'events',
              //   value: JSON.stringify(updEvents),
              // });
              saveEventsToLocalStorage(updEvents);
              // addEvent(newEvent);
              setEvents(updEvents);
              scheduleBasicNotification({ events: updEvents });
              setIsDetailsOpen(false);
            }}
          >
            Добавить
          </Button>
        )}
      </div>
    </div>
  );
}

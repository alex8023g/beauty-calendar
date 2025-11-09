import { Button } from './ui/button';
import { SelectEventType } from './SelectEventType';
import { type Dispatch, type SetStateAction } from 'react';
import { Preferences } from '@capacitor/preferences';
import { useEventsStore } from '@/store/store';
import type { Event } from '@/types';
import type { Day } from '@/lib/createYearCalendar';
import { nanoid } from 'nanoid';

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
  const addEvent = useEventsStore((state) => state.addEvent);
  const deleteEvent = useEventsStore((state) => state.deleteEvent);
  return (
    <div className='/border flex h-full flex-col justify-between pb-10'>
      <div className='/mt-6 /border-t border-gray-100 dark:border-white/10'>
        <dl className='divide-y divide-gray-100 dark:divide-white/10'>
          <div className='grid grid-cols-2 gap-4 px-0 py-4'>
            <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Время
            </dt>
            <dd className='/col-span-2 mt-0 text-right text-sm/6 text-gray-700 dark:text-gray-400'>
              {selectedEvent.time.hour}:
              {String(selectedEvent.time?.minute).padStart(2, '0')}
            </dd>
          </div>
          <div className='grid grid-cols-2 gap-4 px-0 py-4'>
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
              1 час
            </dd>
          </div>
          <div className='grid grid-cols-2 gap-4 px-0 py-4'>
            <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Напомнить
            </dt>
            <dd className='/col-span-2 mt-0 text-right text-sm/6 text-gray-700 dark:text-gray-400'>
              за 2 часа
            </dd>
          </div>
          <div className='grid grid-cols-2 gap-4 px-0 py-4'>
            <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Напомнить
            </dt>
            <dd className='/col-span-2 mt-0 text-right text-sm/6 text-gray-700 dark:text-gray-400'>
              за 1 день
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
              Preferences.set({
                key: 'events',
                value: JSON.stringify(
                  events.filter((event) => event.id !== selectedEvent.id),
                ),
              });
              deleteEvent(selectedEvent.id);
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
              Preferences.set({
                key: 'events',
                value: JSON.stringify([...events, selectedEvent]),
              });
              addEvent({
                ...selectedEvent,
                id: nanoid(),
                dateString: day.dateString,
              });
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

import { Button } from './ui/button';
import { SelectEventType } from './SelectEventType';
import type { Dispatch, SetStateAction } from 'react';
import type { Time } from './TimePicker';

export function TaskDetails({
  time,
  setTime,
}: {
  time: Time;
  setTime: Dispatch<SetStateAction<Time>>;
}) {
  return (
    <div>
      {/* <div className='px-4 sm:px-0'>
        <h3 className='text-base/7 font-semibold text-gray-900 dark:text-white'>
          Добавить событие
        </h3>
        <p className='mt-1 max-w-2xl text-sm/6 text-gray-500 dark:text-gray-400'>
          Personal details and application.
        </p>
      </div> */}
      <div className='/mt-6 /border-t border-gray-100 dark:border-white/10'>
        <dl className='divide-y divide-gray-100 dark:divide-white/10'>
          <div className='py-4 grid grid-cols-2 gap-4 px-0'>
            <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Время
            </dt>
            <dd className=' text-sm/6 text-gray-700 /col-span-2 mt-0 dark:text-gray-400 text-right'>
              {time?.hour}:{time?.minute}
            </dd>
          </div>
          <div className='py-4 grid grid-cols-2 gap-4 px-0'>
            <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Событие
            </dt>
            <dd className='text-sm/6 text-gray-700 /col-span-2 mt-0 dark:text-gray-400 text-right'>
              <SelectEventType />
            </dd>
          </div>
          <div className='py-4 grid grid-cols-2 gap-4 px-0'>
            <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Продолжительность
            </dt>
            <dd className='text-sm/6 text-gray-700 /col-span-2 mt-0 dark:text-gray-400 text-right'>
              1 час
            </dd>
          </div>
          <div className='py-4 grid grid-cols-2 gap-4 px-0'>
            <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Напомнить
            </dt>
            <dd className='text-sm/6 text-gray-700 /col-span-2 mt-0 dark:text-gray-400 text-right'>
              за 2 часа
            </dd>
          </div>
          <div className='py-4 grid grid-cols-2 gap-4 px-0'>
            <dt className='text-sm/6 font-medium text-gray-900 dark:text-gray-100'>
              Напомнить
            </dt>
            <dd className='text-sm/6 text-gray-700 /col-span-2 mt-0 dark:text-gray-400 text-right'>
              за 1 день
            </dd>
          </div>
        </dl>
      </div>
      <div className='flex gap-2 mt-4 '>
        <Button variant='outline' className='grow' onClick={() => setTime(null)}>
          Отменить
        </Button>
        <Button variant='default' className='grow'>
          Добавить
        </Button>
      </div>
    </div>
  );
}

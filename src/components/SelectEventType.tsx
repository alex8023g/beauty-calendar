// import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { eventTypes } from '@/constants/eventConstants';
import { useEventsStore } from '@/stores/zuStore';

export function SelectEventType() {
  const selectedEvent = useEventsStore((state) => state.selectedEvent);
  const setSelectedEvent = useEventsStore((state) => state.setSelectedEvent);
  return (
    <>
      {/* <div className=' grid grid-cols-1'> */}
      <div className='flex justify-end'>
        <select
          id='EventType'
          name='EventType'
          value={selectedEvent.type}
          disabled={Boolean(selectedEvent.id)}
          dir='rtl'
          className='col-start-1 row-start-1 w-full appearance-none justify-self-end rounded-md bg-white pr-1 pl-3 text-base text-gray-700 focus-visible:outline-0 focus-visible:-outline-offset-2 sm:text-sm/6'
          onChange={(e) =>
            setSelectedEvent({ ...selectedEvent, type: e.target.value })
          }
        >
          {eventTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
          {/* <option>Маникюр</option>
          <option>Педикюр</option>
          <option>Брови</option>
          <option>Ресницы</option>
          <option>Массаж</option> */}
        </select>
        {/* {!selectedEvent.id && (
          <ChevronDownIcon
            aria-hidden='true'
            className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400'
          />
        )} */}
      </div>
    </>
  );
}

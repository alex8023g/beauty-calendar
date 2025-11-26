// import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { eventTypes } from '@/constants/eventConstants';
import { useEventsStore } from '@/stores/zuStore';

export function SelectEventType() {
  const selectedEvent = useEventsStore((state) => state.selectedEvent);
  const setSelectedEvent = useEventsStore((state) => state.setSelectedEvent);
  // const isEventEdit = useEventsStore((state) => state.isEventEdit);
  return (
    <>
      {/* <div className=' grid grid-cols-1'> */}
      <div className='flex justify-end'>
        <select
          id='EventType'
          name='EventType'
          value={selectedEvent.type}
          // disabled={Boolean(selectedEvent.id)}
          // disabled={!isEventEdit}
          dir='rtl'
          className='col-start-1 row-start-1 w-full appearance-none justify-self-end rounded-md bg-white pr-1 pl-3 text-base text-gray-700 focus-visible:outline-0 focus-visible:-outline-offset-2 sm:text-sm/6'
          onChange={(e) =>
            setSelectedEvent({ ...selectedEvent, type: e.target.value })
          }
        >
          {eventTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </div>
    </>
  );
}

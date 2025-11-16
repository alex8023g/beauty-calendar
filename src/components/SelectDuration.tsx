import { useEventsStore } from '@/stores/zuStore';
// import '../index.css';

const durations = [
  { value: 1, label: '1 час' },
  { value: 1.5, label: '1 час 30 мин' },
  { value: 2, label: '2 часа' },
  { value: 2.5, label: '2 часа 30 минут' },
  { value: 3, label: '3 часа' },
];
export function SelectDuration() {
  const selectedEvent = useEventsStore((state) => state.selectedEvent);
  const setSelectedEvent = useEventsStore((state) => state.setSelectedEvent);
  return (
    <>
      {/* <div className=' grid grid-cols-1'> */}
      <div className='flex justify-end'>
        <select
          id='EventDuration2'
          name='EventDuration2'
          value={selectedEvent.duration}
          disabled={Boolean(selectedEvent.id)}
          // dir='rtl'
          className='custom-text-align-last-right w-full appearance-none justify-self-start rounded-md bg-white pr-1 pl-3 text-right text-base text-gray-700 focus-visible:outline-0 focus-visible:-outline-offset-2 sm:text-sm/6'
          onChange={(e) => {
            setSelectedEvent({
              ...selectedEvent,
              duration: Number(e.target.value),
            });
            console.log(e.target.value);
          }}
        >
          {durations.map((duration) => (
            <option key={duration.value} value={duration.value}>
              <div className='text-right'>{duration.label}</div>
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

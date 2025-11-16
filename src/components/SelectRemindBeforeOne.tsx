import { useEventsStore } from '@/stores/zuStore';

const reminders = [
  { value: 0.5, label: 'за 30 мин' },
  { value: 1, label: 'за 1 час' },
  { value: 2, label: 'за 2 часа' },
  { value: 3, label: 'за 3 часа' },
];
export default function SelectRemindBeforeOne() {
  const selectedEvent = useEventsStore((state) => state.selectedEvent);
  const setSelectedEvent = useEventsStore((state) => state.setSelectedEvent);

  return (
    <>
      <div className='grid grid-cols-1'>
        <select
          id='EventRemindBeforeOne'
          name='EventRemindBeforeOne'
          value={selectedEvent.reminderOne}
          disabled={Boolean(selectedEvent.id)}
          className='custom-text-align-last-right col-start-1 row-start-1 w-full appearance-none rounded-md bg-white p-0 pl-3 text-right text-base text-gray-900 focus-visible:outline-0 sm:text-sm/6'
          onChange={(e) => {
            setSelectedEvent({
              ...selectedEvent,
              reminderOne: Number(e.target.value),
            });
            console.log(e.target.value);
          }}
        >
          {reminders.map((reminder) => (
            <option key={reminder.value} value={reminder.value}>
              {reminder.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

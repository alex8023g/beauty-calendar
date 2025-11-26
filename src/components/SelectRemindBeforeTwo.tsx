import { useEventsStore } from '@/stores/zuStore';

const reminders = [
  { value: 12, label: 'за 12 часов' },
  { value: 24, label: 'за 1 день' },
  { value: 48, label: 'за 2 дня' },
];
export default function SelectRemindBeforeTwo() {
  const selectedEvent = useEventsStore((state) => state.selectedEvent);
  const setSelectedEvent = useEventsStore((state) => state.setSelectedEvent);
  // const isEventEdit = useEventsStore((state) => state.isEventEdit);
  return (
    <>
      <div className='grid grid-cols-1'>
        <select
          id='EventRemindBeforeOne'
          name='EventRemindBeforeOne'
          value={selectedEvent.reminderTwo}
          // disabled={Boolean(selectedEvent.id)}
          // disabled={!isEventEdit}
          className='custom-text-align-last-right col-start-1 row-start-1 w-full appearance-none rounded-md bg-white p-0 pl-3 text-right text-base text-gray-900 focus-visible:outline-0 sm:text-sm/6'
          onChange={(e) => {
            setSelectedEvent({
              ...selectedEvent,
              reminderTwo: Number(e.target.value),
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

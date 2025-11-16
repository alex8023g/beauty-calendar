import { useEffect, useRef } from 'react';
import { useEventsStore } from '@/stores/zuStore';

export function Hour({
  hour,
  // day,
  setIsDetailsOpen,
  // setEvent,
}: {
  hour: number;
  // day: Day;
  setIsDetailsOpen: (isOpen: boolean) => void;
  // setEvent: Dispatch<SetStateAction<Event>>;
}) {
  const selectedEvent = useEventsStore((state) => state.selectedEvent);
  const setSelectedEvent = useEventsStore((state) => state.setSelectedEvent);
  const el = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (hour === 12) {
      el.current?.scrollIntoView({ block: 'center' });
    }
  }, []);
  return (
    <>
      <div
        ref={el}
        className='z-10'
        onClick={() => {
          console.log('clicked', hour);
          // setTime({ hour: String(hour).padStart(2, '0'), minute: '00' });
          // setTime({ hour, minute: 0 });
          // setEvent((prev) => ({
          //   ...prev,
          //   time: { hour, minute: 0 },
          // }));
          setSelectedEvent({
            ...selectedEvent,
            // id: nanoid(),
            time: { hour, minute: 0 },
          });
          setIsDetailsOpen(true);
        }}
      >
        <div className='-mt-2.5 -ml-14 w-14 pr-2 text-right text-xs/5 text-gray-400 dark:text-gray-500'>
          {hour}:00
        </div>
      </div>
      <div
        className='z-10'
        // onClick={() => setTime({ hour: String(hour).padStart(2, '0'), minute: '30' })}
        onClick={() => {
          // setTime({ hour, minute: 30 });
          // setEvent((prev) => ({
          //   ...prev,
          //   time: { hour, minute: 30 },
          // }));
          setSelectedEvent({
            ...selectedEvent,
            // id: nanoid(),
            time: { hour, minute: 30 },
          });
          setIsDetailsOpen(true);
        }}
      />
    </>
  );
}

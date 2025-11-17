import { Calendars } from '@/components/Calendars';
import { DaySchedule } from '@/components/DaySchedule';
import Drawer from '@/components/Drawer';
import { useStatesStore } from '@/stores/zuStore';

export function HomePage() {
  const selectedDay = useStatesStore((state) => state.selectedDay);
  return (
    // <div>
    <>
      <Calendars />
      <Drawer>
        <DaySchedule day={selectedDay} />
      </Drawer>
    </>
    // </div>
  );
}

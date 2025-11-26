import { useStatesStore } from '@/stores/zuStore';
import { useEventsStore } from '@/stores/zuStore';
import { Button } from './ui/button';

export function CloseEventDetailsBtn({
  variant,
}: {
  variant: 'forDaySchedule' | 'forEventsList';
}) {
  const setIsDetailsOpen = useStatesStore((state) => state.setIsDetailsOpen);
  const setIsDayScheduleOpen = useStatesStore(
    (state) => state.setIsDayScheduleOpen,
  );
  const setDefaultEvent = useEventsStore((state) => state.setDefaultEvent);
  return (
    <Button
      variant='outline'
      className='grow'
      onClick={async () => {
        if (variant === 'forDaySchedule') {
          setIsDetailsOpen(false);
        } else {
          setIsDayScheduleOpen(false);
          setIsDetailsOpen(false);
        }
        await new Promise((resolve) => setTimeout(resolve, 500));
        setDefaultEvent();
      }}
    >
      Закрыть
    </Button>
  );
}

import type { WheelPickerOption } from '@/components/ui/wheel-picker';
import { WheelPicker, WheelPickerWrapper } from '@/components/ui/wheel-picker';
import { useEventsStore } from '@/stores/zuStore';

const createArray = (length: number, add = 0): WheelPickerOption<number>[] =>
  Array.from({ length }, (_, i) => {
    const value = i + add;
    return {
      label: value.toString().padStart(2, '0'),
      value: value,
    };
  });

const createMinutesArray = (length: number): WheelPickerOption<number>[] =>
  Array.from({ length }, (_, i) => {
    const value = i * 5;
    return {
      label: value.toString().padStart(2, '0'),
      value: value,
    };
  });

const hourOptions = createArray(24);
const minuteOptions = createMinutesArray(12);
console.log('🚀 ~ minuteOptions:', minuteOptions);

export function WheelTimePicker() {
  const selectedEvent = useEventsStore((state) => state.selectedEvent);
  const setSelectedEvent = useEventsStore((state) => state.setSelectedEvent);
  return (
    <div className='w-56 bg-white'>
      <WheelPickerWrapper className='text-base shadow-lg'>
        <WheelPicker
          options={hourOptions}
          defaultValue={selectedEvent.time.hour}
          infinite
          onValueChange={(hour) => {
            console.log(hour);
            setSelectedEvent({
              ...selectedEvent,
              time: {
                ...selectedEvent.time,
                hour: hour,
              },
            });
          }}
        />
        <WheelPicker
          options={minuteOptions}
          defaultValue={selectedEvent.time.minute}
          infinite
          onValueChange={(minute) => {
            console.log(minute);
            setSelectedEvent({
              ...selectedEvent,
              time: {
                ...selectedEvent.time,
                minute: minute,
              },
            });
          }}
        />
      </WheelPickerWrapper>
    </div>
  );
}

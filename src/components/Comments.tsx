import { useEventsStore } from '@/stores/zuStore';
import { Keyboard } from '@capacitor/keyboard';

// Keyboard.setAccessoryBarVisible({ isVisible: true });
// Keyboard.setScroll({ isDisabled: false });

export default function Comments() {
  const selectedEvent = useEventsStore((state) => state.selectedEvent);
  const setSelectedEvent = useEventsStore((state) => state.setSelectedEvent);

  return (
    <div className='flex items-start space-x-4'>
      <div className='group relative min-w-0 flex-1 transition-transform duration-300 has-focus:-translate-y-56'>
        <div className='rounded-lg bg-white outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 dark:bg-white/5 dark:outline-white/10 dark:focus-within:outline-indigo-500'>
          <label htmlFor='comment' className='sr-only'>
            Add your comment
          </label>
          <textarea
            id='comment'
            name='comment'
            rows={5}
            placeholder='Добавьте комментарий...'
            className='block w-full resize-none bg-transparent px-3 py-1.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 dark:text-white dark:placeholder:text-gray-500'
            defaultValue={selectedEvent.comments}
            onChange={(e) => {
              setSelectedEvent({
                ...selectedEvent,
                comments: e.target.value,
              });
            }}
          />
        </div>
        <button
          className='absolute right-2 bottom-2 hidden items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white opacity-70 shadow-xs group-has-focus:block hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500'
          onClick={() => {
            Keyboard.hide();
          }}
        >
          ok
        </button>
      </div>
    </div>
  );
}

import { CalendarDaysIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { useNavigate } from 'react-router';

export function ViewToggle() {
  const [path, setPath] = useState<'/' | 'list'>('/');
  const navigate = useNavigate();
  function handleClick() {
    setPath(path === '/' ? 'list' : '/');
    navigate(path === '/' ? '/list' : '/');
  }
  return (
    <div
      className='group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2 dark:bg-white/5 dark:inset-ring-white/10 dark:outline-indigo-500 dark:has-checked:bg-indigo-500'
      onClick={handleClick}
    >
      <span
        className={twJoin(
          'relative size-5 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out',
          path === '/' ? 'translate-x-0' : 'translate-x-5',
        )}
      >
        <span
          aria-hidden='true'
          className={twJoin(
            '/group-has-checked:opacity-0 /group-has-checked:duration-100 /group-has-checked:ease-out /opacity-100 absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in',
            path === '/' ? 'opacity-100' : 'opacity-0 duration-100 ease-out',
          )}
        >
          {/* <svg
            fill='none'
            viewBox='0 0 12 12'
            className='size-3 text-gray-400 dark:text-gray-600'
          >
            <path
              d='M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg> */}
          <CalendarDaysIcon className='size-3 text-gray-400 dark:text-gray-600' />
        </span>
        <span
          aria-hidden='true'
          className={twJoin(
            '/opacity-0 absolute inset-0 flex size-full items-center justify-center transition-opacity duration-100 ease-out',
            path === 'list' ? 'opacity-100' : 'opacity-0',
          )}
        >
          {/* <svg
            fill='currentColor'
            viewBox='0 0 12 12'
            className='size-3 text-indigo-600 dark:text-indigo-500'
          >
            <path d='M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z' />
          </svg> */}
          <ListBulletIcon className='size-3 text-indigo-600 dark:text-indigo-500' />
        </span>
      </span>
    </div>
  );
}

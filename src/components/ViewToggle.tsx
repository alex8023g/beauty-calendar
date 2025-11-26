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
      className='relativ inline-flex w-17 shrink-0 rounded-full p-1 inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600'
      onClick={handleClick}
    >
      <span
        className={twJoin(
          '/bg-white relative size-7 rounded-full shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out',
          path === '/' ? 'translate-x-0' : 'translate-x-8',
        )}
      >
        <span
          aria-hidden='true'
          className={twJoin(
            'absolute inset-0 flex size-full items-center justify-center transition-opacity duration-200 ease-in',
            path === '/' ? 'opacity-100' : 'opacity-0 duration-100 ease-out',
          )}
        >
          <CalendarDaysIcon className='size-5 text-indigo-600' />
        </span>
        <span
          aria-hidden='true'
          className={twJoin(
            'absolute inset-0 flex size-full items-center justify-center transition-opacity duration-100 ease-out',
            path === 'list' ? 'opacity-100' : 'opacity-0',
          )}
        >
          <ListBulletIcon className='size-5 text-indigo-600' />
        </span>
      </span>
    </div>
  );
}

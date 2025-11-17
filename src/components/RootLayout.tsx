import { Outlet } from 'react-router';
import { ViewToggle } from './ViewToggle';

export function RootLayout() {
  return (
    <div className=''>
      <Outlet />
      <footer className='fixed right-0 bottom-0 left-0 border border-blue-500 bg-white p-2'>
        <ViewToggle />
      </footer>
    </div>
  );
}

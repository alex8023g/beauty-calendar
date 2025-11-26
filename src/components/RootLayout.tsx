import { Outlet } from 'react-router';
import { ViewToggle } from './ViewToggle';
import { FlowerIcon } from './FlowerIcon';

export function RootLayout() {
  return (
    <div className='h-dvh'>
      <Outlet />
      <footer className='fixed right-0 bottom-0 left-0 z-20 flex items-center justify-between px-6 py-2 backdrop-blur-lg'>
        <div className='size-6'>
          <FlowerIcon />
        </div>
        <ViewToggle />
      </footer>
    </div>
  );
}

import { Outlet } from 'react-router';
import { Footer } from './Footer';

export function RootLayout() {
  return (
    <div className='h-dvh'>
      <Outlet />
      <Footer />
    </div>
  );
}

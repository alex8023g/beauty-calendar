import { Link } from 'react-router';
import { FlowerIcon } from './FlowerIcon';
import { ViewToggle } from './ViewToggle';

export function Footer() {
  return (
    <footer className='fixed right-0 bottom-0 left-0 z-20 flex items-center justify-between px-6 py-2 backdrop-blur-lg'>
      <div className='size-6'>
        <FlowerIcon />
      </div>
      <div>
        <Link to='/echo'>Echo</Link>
      </div>
      <div>
        <Link to='/icloud'>Icloud</Link>
      </div>
      <ViewToggle />
    </footer>
  );
}

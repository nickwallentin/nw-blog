import Link from 'next/link';
import ThemeButton from './ThemeButton';
interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <header>
      <nav className='flex items-center justify-between py-5 contain'>
        <div>
          <Link href='/'>Nick Wallentin</Link>
        </div>
        <div>
          <ThemeButton />
        </div>
      </nav>
    </header>
  );
};

export default Header;

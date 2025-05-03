import { Button } from '@/components/ui/button';
import { Logo } from '../icons';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';
import { ThemeSwitcher } from './theme-switcher';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Navbar = ({
  className,
  ...props
}: React.ComponentProps<'header'>) => {
  return (
    <header
      className={cn('fixed top-4 z-50 px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      <nav className='h-16 bg-background/40 backdrop-blur-xl border-2 border-white/30 dark:border-white/10 rounded-xl shadow-lg mx-auto max-w-7xl transition-all duration-300 hover:shadow-xl hover:border-white/50 dark:hover:border-white/20 ring-1 ring-white/10 dark:ring-white/5'>
        <div className='h-full flex items-center justify-between px-4 sm:px-6 lg:px-8'>
          <Link href='/'>
            <Logo
              width={120}
              height={30}
              className='transition-transform hover:scale-105'
            />
          </Link>

          {/* Desktop Menu */}
          <NavMenu className='hidden md:block' />

          <div className='flex items-center gap-3'>
            <Button
              asChild
              className='transition-all hover:scale-105 active:scale-95'
            >
              <Link href='#order'>Bergabung</Link>
            </Button>
            <ThemeSwitcher className='transition-all hover:scale-105 active:scale-95' />

            {/* Mobile Menu */}
            <div className='md:hidden'>
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

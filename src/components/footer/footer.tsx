import Link from 'next/link';
import { links } from './links';
import { siteConfig } from '@/config/site';
import { Discord, Facebook, GitHub, Instagram } from '../icons';
import { Logo } from '../icons';
import { Shade } from '../ui/shade';

export const Footer = () => {
  return (
    <footer>
      <Shade
        corners={['top-left', 'top-right']}
        cornerClass='border-foreground/75 size-5'
        className="border-t h-14 after:content-[''] after:w-full after:h-14 after:bg-gradient-to-t after:from-background after:to-transparent after:inset-0 after:absolute"
      />
      <div className='mx-auto max-w-5xl px-6 py-10'>
        <Link href='/' aria-label='go home' className='mx-auto block size-fit'>
          <Logo width={200} height={100} />
        </Link>

        <div className='my-8 flex flex-wrap justify-center gap-6 text-sm'>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className='text-muted-foreground hover:text-primary block duration-150'
            >
              <span>{label}</span>
            </Link>
          ))}
        </div>
        <div className='my-8 flex flex-wrap justify-center gap-6 text-sm'>
          <Link
            href={siteConfig.links.instagram || '#'}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={'instagram'}
            className='text-muted-foreground hover:text-primary block'
          >
            <Instagram className='size-6' />
          </Link>
          <Link
            href={siteConfig.links.facebook || '#'}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={'facebook'}
            className='text-muted-foreground hover:text-primary block'
          >
            <Facebook className='size-6' />
          </Link>
          <Link
            href={siteConfig.links.discord || '#'}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={'discord'}
            className='text-muted-foreground hover:text-primary block'
          >
            <Discord className='size-6' />
          </Link>
          <Link
            href={siteConfig.links.github || '#'}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={'github'}
            className='text-muted-foreground hover:text-primary block'
          >
            <GitHub className='size-6' />
          </Link>
        </div>
        <span className='text-muted-foreground block text-center text-sm'>
          {' '}
          © {new Date().getFullYear()} {siteConfig.title}, All rights reserved
        </span>
      </div>
      <Shade className="h-14 after:content-[''] after:w-full after:h-14 after:bg-gradient-to-t after:to-background after:from-transparent after:inset-0 after:absolute" />
    </footer>
  );
};

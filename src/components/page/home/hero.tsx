'use client';
import { Button } from '@/components/ui/button';
import { TextAnimate, BlurFade, CountUp } from '@/components/animation';
import Link from 'next/link';
import Magnet from '@/components/ui/magnet';
import { Spotlight } from '@/components/ui/spotlight-new';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && resolvedTheme === 'light';

  return (
    <>
      <div
        className={`relative h-[40rem] w-full flex items-center justify-center px-4 sm:px-6 overflow-hidden ${
          isLight ? 'bg-slate-50/90' : 'bg-black/[0.96]'
        } antialiased bg-grid-white/[0.02]`}
      >
        <Spotlight duration={10} />

        <div className='relative z-10 mx-auto max-w-7xl w-full pt-20 md:pt-0 text-center'>
          <TextAnimate
            as={'h1'}
            className={`text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent ${
              isLight
                ? 'bg-gradient-to-b from-slate-900 to-slate-600'
                : 'bg-gradient-to-b from-neutral-50 to-neutral-400'
            }`}
            once
            animation='blurInDown'
            duration={0.3}
          >
            Kami Bantu Selesaikan Proyek <br className='md:hidden' /> Kodingan
            Kamu, <br />
            Mulai dari{' '}
            <span className='text-primary'>
              <CountUp
                from={0}
                to={99}
                suffix='K'
                direction='up'
                duration={1.5}
                className='inline-block'
              />
            </span>{' '}
            Aja!
          </TextAnimate>
          <TextAnimate
            className={`mt-6 font-normal text-base ${
              isLight ? 'text-slate-700' : 'text-neutral-300'
            } max-w-lg text-center mx-auto`}
            as={'p'}
            once
            animation='blurInDown'
            delay={0.3}
            duration={0.3}
          >
            Lupakan coding yang membuat pusing! Dapatkan proyek IT berkualitas
            tinggi tanpa stress deadline. Tim ahli kami siap memberikan solusi
            kilat dengan hasil mengesankan.
          </TextAnimate>
          <div className='mt-8 sm:mt-12 flex items-center justify-center gap-4'>
            <BlurFade>
              <Magnet
                padding={60}
                magnetStrength={5}
                activeTransition='transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              >
                <Button
                  asChild
                  size='lg'
                  className='h-12 animate-shimmer items-center justify-center rounded-md 
                    border border-slate-800 dark:border-slate-800 
                    bg-[linear-gradient(110deg,#f5f7fa,45%,#c3cfe2,55%,#f5f7fa)] dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                    bg-[length:200%_100%] 
                    px-6 font-medium 
                    text-slate-700 dark:text-slate-400 
                    transition-colors 
                    focus:outline-none focus:ring-2 focus:ring-primary/70 dark:focus:ring-slate-400 
                    focus:ring-offset-2 focus:ring-offset-background'
                >
                  <Link href={'#join'} className='flex items-center gap-2'>
                    <span className='relative'>
                      <span className='inline-flex items-center'>
                        <span>Selesaikan</span>
                        <span className='line-through mx-1 opacity-90'>
                          coding
                        </span>
                        <span>sekarang!</span>
                        <svg
                          className='ml-2 w-5 h-5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14 5l7 7m0 0l-7 7m7-7H3'
                          />
                        </svg>
                      </span>
                    </span>
                  </Link>
                </Button>
              </Magnet>
            </BlurFade>
          </div>
        </div>
      </div>
    </>
  );
};

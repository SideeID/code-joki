import { Button } from '@/components/ui/button';
import { TextAnimate, BlurFade, CountUp } from '@/components/animation';
import Link from 'next/link';
import Magnet from '@/components/ui/magnet';
// import { Boxes } from '@/components/ui/background-boxes';
// import { AuroraBackground } from '@/components/ui/aurora-background';

export const Hero = () => {
  return (
    <>
      <div className='relative flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 md:py-28 overflow-hidden'>
        <div className='absolute inset-0 -z-10'>
          {/* <AuroraBackground>
            <div className='h-full w-full'></div>
          </AuroraBackground> */}
        </div>

        <div className='text-center max-w-2xl relative z-10 mx-auto px-2 sm:px-4'>
          <TextAnimate
            as={'h1'}
            className='mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl md:leading-[1.2] leading-tight font-bold'
            once
            animation='blurInDown'
            duration={0.3}
          >
            Kami Jokiin Proyek Kodingan Kamu, Mulai dari{' '}
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
            className='mt-6 text-[15px] sm:text-[17px] md:text-lg text-foreground/75 mx-auto max-w-md sm:max-w-xl'
            as={'p'}
            once
            animation='blurInDown'
            delay={0.3}
            duration={0.3}
          >
            Lupakan coding yang membuat pusing! Dapatkan proyek IT berkualitas
            tinggi tanpa stress deadline. Tim ahli kami siap memberikan solusi
            kilat dengan hasil mengesankan yang dijamin membuat dosen & klien
            Anda terpukau.
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

import { cn } from '@/lib/utils';
import { Marquee } from '@/components/animation/marquee';
import { Card, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import {
  BottomLeftCorner,
  BottomRightCorner,
  TopLeftCorner,
  TopRightCorner,
} from '@/components/ui/corners';
import { technologies } from '@/data/technologies';

export function MarqueeMember() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center overflow-x-hidden py-6'>
      <h2 className='mb-4 text-xl font-medium text-center opacity-85'>
        Kami Menguasai Berbagai Teknologi
      </h2>

      <Marquee pauseOnHover className='[--duration:40s] isolate'>
        {technologies.map(({ name, description, icon }) => (
          <figure
            key={name}
            className={cn(
              'hover:rotate-0 transition duration-300',
              'hover:scale-110 hover:z-40 relative',
              'opacity-85 hover:opacity-100 group',
            )}
          >
            <BottomLeftCorner className='border-primary/50' />
            <BottomRightCorner className='border-primary/50' />
            <TopLeftCorner className='border-primary/50' />
            <TopRightCorner className='border-primary/50' />

            <Card className='flex flex-row items-center gap-4 px-5 py-3 rounded-lg scale-90 hover:scale-110 hover:shadow-md hover:border-primary/30 transition-all duration-300 bg-background/50 backdrop-blur-sm'>
              <div className='flex-shrink-0 w-10 h-10 flex items-center justify-center'>
                <Image
                  className='rounded-md'
                  width='40'
                  height='40'
                  alt={`${name} icon`}
                  src={icon}
                />
              </div>

              <div className='flex flex-col'>
                <figcaption className='text-sm font-medium'>
                  <CardTitle className='text-base group-hover:text-primary transition-colors'>
                    {name}
                  </CardTitle>
                </figcaption>
                <p className='text-xs text-muted-foreground'>{description}</p>
              </div>
            </Card>
          </figure>
        ))}
      </Marquee>

      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background'></div>
    </div>
  );
}

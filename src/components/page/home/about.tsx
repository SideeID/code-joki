import { CheckCheck, Trophy } from 'lucide-react';
import Image from 'next/image';
import { TextAnimate, BlurFade } from '@/components/animation';
import { NumberTicker } from '@/components/animation';

export const About = () => {
  return (
    <section id='tentang' className='py-16 md:py-32'>
      <div className='mx-auto max-w-screen-xl space-y-8 px-6 md:space-y-16'>
        <TextAnimate
          as={'h2'}
          once
          className='relative z-10 max-w-xl text-5xl font-medium lg:text-6xl'
        >
          Layanan Joki Koding Profesional & Terpercaya.
        </TextAnimate>
        <BlurFade className='relative'>
          <div className='relative z-10 space-y-4 md:w-1/2'>
            <p>
              CodeJoki lahir dari pemahaman mendalam tentang tantangan yang
              dihadapi mahasiswa dan profesional IT dalam menyelesaikan proyek
              coding. Didirikan oleh tim developer berpengalaman, kami hadir
              untuk menjadi solusi dari semua kesulitan coding Anda.
            </p>
            <p>
              Tim kami terdiri dari pakar berbagai bahasa pemrograman dan
              framework modern, dengan pengalaman mengerjakan ratusan proyek
              dari berbagai tingkat kesulitan—dari tugas kuliah sederhana hingga
              sistem kompleks untuk kebutuhan profesional.
            </p>
            <p>
              Kami berkomitmen pada tiga nilai utama: kualitas kode yang
              superior, harga yang transparan dan terjangkau, serta pengerjaan
              yang tepat waktu. Kepuasan Anda adalah prioritas kami.
            </p>
            <div className='grid grid-cols-2 gap-3 pt-6 sm:gap-4'>
              <div className='space-y-3'>
                <div className='flex items-center gap-2'>
                  <CheckCheck className='size-4 text-primary' />
                  <h3 className='text-sm font-medium'>
                    +<NumberTicker value={500} />
                  </h3>
                </div>
                <p className='text-muted-foreground text-sm'>
                  Proyek berhasil diselesaikan dengan sempurna
                </p>
              </div>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <Trophy className='size-4 text-primary' />
                  <h3 className='text-sm font-medium'>
                    <NumberTicker value={98} />%
                  </h3>
                </div>
                <p className='text-muted-foreground text-sm'>
                  Tingkat kepuasan klien dengan hasil akhir yang{' '}
                  <span className='text-primary'>berkualitas tinggi</span>.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0'>
            <div
              aria-hidden
              className='bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-54% md:block'
            ></div>
            <div className='border-border/50 relative rounded-2xl border border-dotted p-2'>
              <Image
                src='/banner-2.png'
                className='rounded-[12px] h-full object-cover object-right'
                alt='Ilustrasi layanan coding profesional CodeJoki'
                width={1207}
                height={929}
                quality={85}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px'
                priority={false}
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

'use client';
import React from 'react';
import { WavyBackground } from '@/components/ui/wavy-background';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';

export function ProjectsHero() {
  return (
    <WavyBackground
      className='max-w-4xl mx-auto py-20'
      containerClassName='min-h-[60vh] md:min-h-[70vh] pt-24'
      colors={['#3b82f6', '#2563eb', '#1d4ed8', '#1e40af', '#172554']}
      waveWidth={100}
      backgroundFill='#020617'
      blur={10}
      waveOpacity={0.7}
      speed='fast'
      animated={false} 
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='space-y-6'
      >
        <h1 className='text-3xl md:text-5xl lg:text-7xl text-white font-bold text-center leading-tight'>
          Proyek Siap Pakai
        </h1>
        <p className='text-base md:text-xl mt-4 text-white/80 font-normal text-center max-w-2xl mx-auto'>
          Koleksi template dan boilerplate premium yang dapat disesuaikan dengan
          kebutuhan bisnis Anda. Hemat waktu dan biaya dengan solusi yang telah
          teruji.
        </p>

        <div className='flex flex-wrap justify-center gap-4 pt-6'>
          <Button
            size='lg'
            variant='outline'
            className='bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all'
            onClick={() => {
              document
                .getElementById('projects-list')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Lihat Koleksi Kami
            <ArrowDown className='ml-2 h-4 w-4' />
          </Button>
          <Button
            size='lg'
            className='bg-primary hover:bg-primary/90 text-white transition-all'
            asChild
          >
            <Link href='/#join'>Konsultasi Gratis</Link>
          </Button>
        </div>
      </motion.div>
    </WavyBackground>
  );
}

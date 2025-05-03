'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { TextAnimate, BlurFade } from '@/components/animation';
import { projectItems } from '@/data/project-items';
import type { FeatureProps } from './ready-project';

const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  const getIconColorClass = () => {
    switch (index) {
      case 0:
        return 'text-green-500';
      case 1:
        return 'text-purple-500';
      case 2:
        return 'text-blue-500';
      case 3:
        return 'text-orange-500';
      case 4:
        return 'text-gray-500';
      case 5:
        return 'text-indigo-500';
      case 6:
        return 'text-sky-500';
      case 7:
        return 'text-teal-500';
      default:
        return 'text-primary';
    }
  };

  return (
    <div
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800',
      )}
    >
      {index < 4 ? (
        <div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none' />
      ) : (
        <div className='opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none' />
      )}
      <div className='mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400'>
        <div className={cn('h-6 w-6', getIconColorClass())}>{icon}</div>
      </div>
      <div className='text-lg font-bold mb-2 relative z-10 px-10'>
        <div className='absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center' />
        <span className='group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100'>
          {title}
        </span>
      </div>
      <p className='text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10'>
        {description}
      </p>
    </div>
  );
};

export function ReadyProjects() {
  return (
    <section id='projects' className='py-16 px-4'>
      <div className='mx-auto max-w-screen-xl'>
        <div className='text-center mb-12'>
          <TextAnimate
            as={'h2'}
            once
            className='text-3xl sm:text-4xl font-bold mb-4'
            animation='blurInDown'
          >
            Proyek Siap Pakai
          </TextAnimate>
          <TextAnimate
            as={'p'}
            once
            className='text-lg text-muted-foreground max-w-2xl mx-auto'
            animation='fadeIn'
            delay={0.2}
          >
            Template dan boilerplate berkualitas tinggi yang dapat segera
            digunakan dan disesuaikan dengan kebutuhan spesifik Anda.
          </TextAnimate>
        </div>

        <BlurFade>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto border-t border-l border-r dark:border-neutral-800'>
            {projectItems.map((project, index) => (
              <Feature
                key={project.title}
                title={project.title}
                description={project.description}
                icon={project.icon}
                index={index}
              />
            ))}
          </div>
        </BlurFade>

        <div className='mt-12 flex justify-center'>
          <Button
            asChild
            variant='outline'
            size='lg'
            className='group border-primary/20 hover:border-primary/40'
          >
            <Link href='/projects'>
              <span>Lihat semua proyek siap pakai</span>
              <ArrowRight className='ml-2 h-4 w-4 transition-transform group-hover:translate-x-1' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

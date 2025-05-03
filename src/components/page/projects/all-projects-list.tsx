'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Plus } from 'lucide-react';
import { BlurFade } from '@/components/animation';
import { cn } from '@/lib/utils';
import { projects } from '@/data/projects';

const CornerIcon = ({
  className,
  ...props
}: React.ComponentProps<typeof Plus>) => {
  return (
    <Plus
      className={cn('h-6 w-6 dark:text-white/70 text-black/70', className)}
      {...props}
    />
  );
};

export function AllProjectsList() {
  const [categories] = useState([
    'Semua',
    ...Array.from(new Set(projects.map((p) => p.category))),
  ]);
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProjects =
    activeCategory === 'Semua'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Category filters */}
      <div className='flex flex-wrap gap-2 mb-8'>
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'default' : 'outline'}
            size='sm'
            onClick={() => setActiveCategory(category)}
            className={cn(
              'rounded-full transition-all',
              activeCategory === category ? 'shadow-md' : '',
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {filteredProjects.map((project, index) => (
          <BlurFade key={project.id} delay={index * 0.1}>
            <div className='h-full border border-black/[0.2] dark:border-white/[0.2] bg-white/50 dark:bg-black/50 backdrop-blur-sm rounded-lg flex flex-col items-start w-full p-5 relative group transition-all duration-300 hover:shadow-lg hover:border-black/40 dark:hover:border-white/40'>
              <CornerIcon className='absolute h-5 w-5 -top-2.5 -left-2.5 group-hover:rotate-90 transition-transform duration-300' />
              <CornerIcon className='absolute h-5 w-5 -bottom-2.5 -left-2.5 group-hover:-rotate-90 transition-transform duration-300' />
              <CornerIcon className='absolute h-5 w-5 -top-2.5 -right-2.5 group-hover:-rotate-90 transition-transform duration-300' />
              <CornerIcon className='absolute h-5 w-5 -bottom-2.5 -right-2.5 group-hover:rotate-90 transition-transform duration-300' />

              <div className='flex items-center justify-between w-full mb-4'>
                <div className='flex items-center gap-2'>
                  <div className='p-2 rounded-md bg-slate-100 dark:bg-slate-800'>
                    <div className='h-5 w-5'>{project.icon}</div>
                  </div>
                  <h2 className='text-lg font-medium dark:text-white text-black line-clamp-1'>
                    {project.title}
                  </h2>
                </div>
                {project.popular && (
                  <Badge className='bg-primary/80 backdrop-blur-sm text-primary-foreground border-none text-xs whitespace-nowrap'>
                    Populer
                  </Badge>
                )}
              </div>

              <div className='mb-4 h-[60px]'>
                <p className='text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3'>
                  {project.description}
                </p>
              </div>

              <div className='mb-4 h-[80px]'>
                <h4 className='text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2'>
                  Teknologi
                </h4>
                <div className='flex flex-wrap gap-1.5'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='text-xs px-2 py-0.5 rounded-full border border-black/[0.1] dark:border-white/[0.1] text-neutral-600 dark:text-neutral-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className='mb-4 h-[100px]'>
                <h4 className='text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2'>
                  Fitur Utama
                </h4>
                <ul className='text-sm space-y-1'>
                  {project.features.slice(0, 3).map((feature, i) => (
                    <li
                      key={i}
                      className='flex items-start gap-1.5 text-neutral-600 dark:text-neutral-400 line-clamp-1'
                    >
                      <CheckCircle className='h-3.5 w-3.5 text-primary/80 mt-0.5 flex-shrink-0' />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {project.features.length > 3 && (
                    <li className='text-xs text-neutral-500 dark:text-neutral-500 pl-5'>
                      +{project.features.length - 3} fitur lainnya
                    </li>
                  )}
                </ul>
              </div>

              <div className='w-full mt-auto pt-4 border-t border-black/10 dark:border-white/10'>
                <div className='text-lg font-medium text-right mb-3 text-neutral-800 dark:text-neutral-300'>
                  {project.price}
                </div>
                <Button className='w-full bg-black/80 hover:bg-black dark:bg-white/10 dark:hover:bg-white/20 text-white backdrop-blur-sm rounded-md group-hover:bg-primary dark:group-hover:bg-primary/80 transition-all duration-300'>
                  Konsultasi & Pesan
                </Button>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className='text-center py-16'>
          <p className='text-lg text-muted-foreground'>
            Tidak ada proyek ditemukan dalam kategori ini.
          </p>
          <Button
            onClick={() => setActiveCategory('Semua')}
            variant='outline'
            className='mt-4'
          >
            Lihat semua proyek
          </Button>
        </div>
      )}
    </>
  );
}

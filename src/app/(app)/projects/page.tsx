import { Metadata } from 'next';
import { AllProjectsList, ProjectsHero } from '@/components/page/projects';
import { generateMetadata } from '@/lib/metadata';
import { Shade } from '@/components/ui/shade';

export const metadata: Metadata = generateMetadata({
  title: 'Proyek Siap Pakai | CodeJoki',
  description:
    'Berbagai template dan boilerplate berkualitas tinggi yang dapat disesuaikan dengan kebutuhan spesifik Anda',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />

      <div className='relative'>
        <Shade className='border-t' />

        <div
          id='projects-list'
          className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'
        >
          <div className='mb-12 max-w-3xl'>
            <h2 className='text-3xl font-bold mb-4'>Semua Proyek</h2>
            <p className='text-lg text-muted-foreground'>
              Template dan boilerplate berkualitas tinggi untuk mempercepat
              pengembangan proyek Anda. Semua proyek dapat disesuaikan dengan
              kebutuhan spesifik bisnis Anda.
            </p>
          </div>

          <AllProjectsList />
        </div>

        <Shade className='border-b' />
      </div>
    </>
  );
}

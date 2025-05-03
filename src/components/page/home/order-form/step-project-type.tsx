import { projectTypeCards } from '@/data/project-types';
import type { ProjectType } from './../order-form';

export function StepProjectType({
  onSelect,
}: {
  onSelect: (type: ProjectType) => void;
}) {
  return (
    <div>
      <h3 className='text-xl font-medium mb-6 text-center'>
        Pilih Jenis Proyek
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {projectTypeCards.map((card) => (
          <div
            key={card.type}
            onClick={() => onSelect(card.type as ProjectType)}
            className='p-6 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer transition-all hover:border-primary hover:shadow-md hover:scale-[1.02] flex flex-col items-center text-center bg-white dark:bg-black/50'
          >
            <div className='mb-4'>{card.icon}</div>
            <h4 className='font-medium text-lg mb-2'>{card.title}</h4>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

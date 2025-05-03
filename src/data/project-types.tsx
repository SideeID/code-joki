import { Globe, Smartphone, Monitor, BarChart3 } from 'lucide-react';
import type { ProjectTypeCard } from './project-type';

export const projectTypeCards: ProjectTypeCard[] = [
  {
    type: 'website',
    title: 'Website',
    description: 'Aplikasi web, landing page, e-commerce, atau portal',
    icon: <Globe className='w-10 h-10 text-primary' />,
  },
  {
    type: 'mobile-app',
    title: 'Mobile App',
    description: 'Aplikasi untuk Android, iOS, atau cross-platform',
    icon: <Smartphone className='w-10 h-10 text-primary' />,
  },
  {
    type: 'desktop-app',
    title: 'Desktop App',
    description: 'Aplikasi untuk Windows, macOS, atau Linux',
    icon: <Monitor className='w-10 h-10 text-primary' />,
  },
  {
    type: 'data-science',
    title: 'Data Science',
    description: 'Analisis data, machine learning, atau visualisasi',
    icon: <BarChart3 className='w-10 h-10 text-primary' />,
  },
];

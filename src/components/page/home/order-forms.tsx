'use client';
import { useState } from 'react';
import { TextAnimate } from '@/components/animation';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import type { FormData, ProjectType, DeadlineType } from './order-form';
import { StepProjectType } from './order-form/step-project-type';
import { StepDescription } from './order-form/step-description';
import { StepDeadline } from './order-form/step-deadline';

export function OrderForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    description: '',
    deadline: {
      type: 'specific',
      date: undefined,
      flexibility: 'normal',
    },
  });

  const handleSelectProjectType = (type: ProjectType) => {
    setFormData({ ...formData, projectType: type });
    setStep(1);
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const handleDeadlineTypeChange = (value: DeadlineType) => {
    setFormData({
      ...formData,
      deadline: { ...formData.deadline, type: value },
    });
  };

  const handleDateChange = (date: Date | undefined) => {
    setFormData({
      ...formData,
      deadline: { ...formData.deadline, date },
    });
  };

  const handleFlexibilityChange = (value: string) => {
    setFormData({
      ...formData,
      deadline: { ...formData.deadline, flexibility: value },
    });
  };

  const handleBack = () => setStep(step - 1);
  const handleContinue = () => setStep(step + 1);

  const sendOrderToWhatsApp = () => {
    const adminWhatsApp = siteConfig.links.whatsapp.replace(
      'https://wa.me/',
      '',
    );
    const deadlineInfo =
      formData.deadline.type === 'specific' && formData.deadline.date
        ? `Tanggal Spesifik: ${formData.deadline.date.toLocaleDateString(
            'id-ID',
          )}`
        : `Fleksibel: ${formData.deadline.flexibility}`;
    const projectTypeLabel =
      formData.projectType.charAt(0).toUpperCase() +
      formData.projectType.slice(1).replace('-', ' ');
    const message = `*PESANAN BARU*\n\nJenis Proyek: ${projectTypeLabel}\n\nDeskripsi:\n${formData.description}\n\nDeadline: ${deadlineInfo}\n\nMohon diproses, terima kasih.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${adminWhatsApp}?text=${encodedMessage}`,
      '_blank',
    );
  };

  const isValidDescription = formData.description.trim().length >= 10;
  const isValidDeadline =
    formData.deadline.type === 'specific'
      ? !!formData.deadline.date
      : !!formData.deadline.flexibility;

  return (
    <section
      id='order'
      className='py-10 sm:py-16 px-2 sm:px-4 bg-slate-50 dark:bg-black/30'
    >
      <div className='mx-auto max-w-screen-xl'>
        <div className='text-center mb-8 sm:mb-12'>
          <TextAnimate
            as={'h2'}
            once
            className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4'
            animation='blurInDown'
          >
            Pesan Sekarang
          </TextAnimate>
          <TextAnimate
            as={'p'}
            once
            className='text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'
            animation='fadeIn'
            delay={0.2}
          >
            Mulai proyek Anda dengan mengisi formulir pemesanan di bawah ini
          </TextAnimate>
        </div>
        <div className='max-w-full sm:max-w-3xl mx-auto relative min-h-[400px] bg-white dark:bg-black/50 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800'>
          {/* Progress indicator */}
          <div className='bg-gray-100 dark:bg-gray-800/50 py-3 sm:py-4 px-3 sm:px-6 border-b border-gray-200 dark:border-gray-700'>
            <div className='flex justify-between items-center text-xs sm:text-base'>
              <div className='flex items-center space-x-2'>
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center font-medium',
                    step >= 0
                      ? 'bg-primary text-white'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400',
                  )}
                >
                  1
                </div>
                <span
                  className={step >= 0 ? 'text-foreground' : 'text-gray-500'}
                >
                  Jenis
                </span>
              </div>
              <div className='h-0.5 w-12 bg-gray-300 dark:bg-gray-700'></div>
              <div className='flex items-center space-x-2'>
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center font-medium',
                    step >= 1
                      ? 'bg-primary text-white'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400',
                  )}
                >
                  2
                </div>
                <span
                  className={step >= 1 ? 'text-foreground' : 'text-gray-500'}
                >
                  Deskripsi
                </span>
              </div>
              <div className='h-0.5 w-12 bg-gray-300 dark:bg-gray-700'></div>
              <div className='flex items-center space-x-2'>
                <div
                  className={cn(
                    'w-8 h-8 rounded-full flex items-center justify-center font-medium',
                    step >= 2
                      ? 'bg-primary text-white'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400',
                  )}
                >
                  3
                </div>
                <span
                  className={step >= 2 ? 'text-foreground' : 'text-gray-500'}
                >
                  Deadline
                </span>
              </div>
            </div>
          </div>
          {/* Form content */}
          <AnimatePresence mode='wait'>
            {step === 0 && (
              <motion.div
                key='step-0'
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className='p-3 sm:p-6'
              >
                <StepProjectType onSelect={handleSelectProjectType} />
              </motion.div>
            )}
            {step === 1 && (
              <motion.div
                key='step-1'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className='p-3 sm:p-6'
              >
                <StepDescription
                  description={formData.description}
                  onChange={handleDescriptionChange}
                  onBack={handleBack}
                  onContinue={handleContinue}
                  isValid={isValidDescription}
                />
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key='step-2'
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className='p-3 sm:p-6'
              >
                <StepDeadline
                  deadline={formData.deadline}
                  onDeadlineTypeChange={handleDeadlineTypeChange}
                  onDateChange={handleDateChange}
                  onFlexibilityChange={handleFlexibilityChange}
                  onBack={handleBack}
                  onSubmit={sendOrderToWhatsApp}
                  isValid={isValidDeadline}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

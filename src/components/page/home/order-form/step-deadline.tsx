import { Calendar } from '@/components/ui/calendar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CalendarIcon, ChevronLeft, Send } from 'lucide-react';
import { format } from 'date-fns';

const flexibilityOptions = [
  { id: 'urgent', label: 'Urgent (1-3 hari)' },
  { id: 'normal', label: 'Normal (1-2 minggu)' },
  { id: 'relaxed', label: 'Santai (2+ minggu)' },
];

export function StepDeadline({
  deadline,
  onDeadlineTypeChange,
  onDateChange,
  onFlexibilityChange,
  onBack,
  onSubmit,
  isValid,
}: {
  deadline: {
    type: 'specific' | 'flexible';
    date: Date | undefined;
    flexibility: string;
  };
  onDeadlineTypeChange: (value: 'specific' | 'flexible') => void;
  onDateChange: (date: Date | undefined) => void;
  onFlexibilityChange: (value: string) => void;
  onBack: () => void;
  onSubmit: () => void;
  isValid: boolean;
}) {
  return (
    <div>
      <h3 className='text-xl font-medium mb-6 text-center'>
        Tentukan Deadline
      </h3>
      <RadioGroup
        value={deadline.type}
        onValueChange={onDeadlineTypeChange}
        className='mb-6'
      >
        <div className='flex items-center space-x-2 mb-2'>
          <RadioGroupItem value='specific' id='specific' />
          <Label htmlFor='specific'>Tanggal Spesifik</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='flexible' id='flexible' />
          <Label htmlFor='flexible'>Fleksibel</Label>
        </div>
      </RadioGroup>
      {deadline.type === 'specific' ? (
        <div className='mb-6'>
          <p className='mb-2 text-sm font-medium'>Pilih tanggal deadline:</p>
          <div className='border rounded-md p-3 bg-white dark:bg-gray-900'>
            <Calendar
              mode='single'
              selected={deadline.date}
              onSelect={onDateChange}
              disabled={(date) => date < new Date()}
              className='mx-auto'
            />
          </div>
          {deadline.date && (
            <p className='mt-2 text-sm flex items-center gap-1 text-primary'>
              <CalendarIcon className='w-4 h-4' />
              <span>
                Deadline dipilih: {format(deadline.date, 'dd MMMM yyyy')}
              </span>
            </p>
          )}
        </div>
      ) : (
        <div className='mb-6'>
          <p className='mb-3 text-sm font-medium'>Pilih fleksibilitas waktu:</p>
          <RadioGroup
            value={deadline.flexibility}
            onValueChange={onFlexibilityChange}
            className='space-y-3'
          >
            {flexibilityOptions.map((option) => (
              <div key={option.id} className='flex items-center space-x-2'>
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      )}
      <div className='flex justify-between mt-8'>
        <button
          type='button'
          className='btn btn-outline flex items-center gap-2'
          onClick={onBack}
        >
          <ChevronLeft className='w-4 h-4' /> Kembali
        </button>
        <button
          type='button'
          className='btn btn-success flex items-center'
          onClick={onSubmit}
          disabled={!isValid}
        >
          <Send className='w-4 h-4 mr-2' /> Kirim Pesanan
        </button>
      </div>
    </div>
  );
}

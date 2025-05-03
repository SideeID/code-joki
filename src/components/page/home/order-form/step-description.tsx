import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export function StepDescription({
  description,
  onChange,
  onBack,
  onContinue,
  isValid,
}: {
  description: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBack: () => void;
  onContinue: () => void;
  isValid: boolean;
}) {
  return (
    <div>
      <h3 className='text-xl font-medium mb-6 text-center'>Deskripsi Proyek</h3>
      <div className='mb-6'>
        <Label htmlFor='description' className='block mb-2'>
          Jelaskan secara detail kebutuhan proyek Anda:
        </Label>
        <Textarea
          id='description'
          placeholder='Contoh: Saya membutuhkan website portofolio yang responsif dengan 5 halaman (Home, About, Services, Portfolio, Contact). Website harus menggunakan React dan Tailwind CSS...'
          className='min-h-[150px]'
          value={description}
          onChange={onChange}
        />
        <p className='mt-2 text-xs text-gray-500'>
          Minimum 10 karakter. Semakin detail deskripsi Anda, semakin akurat
          estimasi yang kami berikan.
        </p>
      </div>
      <div className='flex justify-between mt-8'>
        <button
          type='button'
          className='btn btn-outline flex items-center gap-2'
          onClick={onBack}
        >
          Kembali
        </button>
        <button
          type='button'
          className='btn btn-primary'
          onClick={onContinue}
          disabled={!isValid}
        >
          Lanjutkan
        </button>
      </div>
    </div>
  );
}

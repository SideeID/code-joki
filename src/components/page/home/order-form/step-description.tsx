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
      <h3 className='text-lg sm:text-xl font-medium mb-4 sm:mb-6 text-center'>
        Deskripsi Proyek
      </h3>
      <div className='mb-4 sm:mb-6'>
        <Label
          htmlFor='description'
          className='block mb-2 text-sm sm:text-base'
        >
          Jelaskan secara detail kebutuhan proyek Anda:
        </Label>
        <Textarea
          id='description'
          placeholder='Contoh: Saya membutuhkan website portofolio yang responsif dengan 5 halaman (Home, About, Services, Portfolio, Contact). Website harus menggunakan React dan Tailwind CSS...'
          className='min-h-[120px] sm:min-h-[150px] text-sm sm:text-base'
          value={description}
          onChange={onChange}
        />
        <p className='mt-2 text-xs text-gray-500'>
          Minimum 10 karakter. Semakin detail deskripsi Anda, semakin akurat
          estimasi yang kami berikan.
        </p>
      </div>
      <div className='flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-6 sm:mt-8'>
        <button
          type='button'
          className='px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] w-full sm:w-auto'
          onClick={onBack}
        >
          Kembali
        </button>
        <button
          type='button'
          className={`px-8 py-0.5 border-2 uppercase transition duration-200 text-sm w-full sm:w-auto
            ${
              isValid
                ? 'border-black dark:border-white bg-white text-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]'
                : 'border-gray-300 dark:border-gray-700 bg-gray-200 text-gray-400 dark:bg-gray-800 dark:text-gray-500 shadow-none cursor-not-allowed'
            }
          `}
          onClick={onContinue}
          disabled={!isValid}
        >
          Lanjutkan
        </button>
      </div>
    </div>
  );
}

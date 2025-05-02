import { Metadata } from 'next';
import { FAQSection } from '@/components/page/faq';
import { generateMetadata } from '@/lib/metadata';
import { Shade } from '@/components/ui/shade';
import FAQSchema from '@/components/schema/faq-schema';

export const metadata: Metadata = generateMetadata({
  title: 'FAQ - Pertanyaan & Jawaban Seputar Jasa Joki Coding',
  description:
    'Temukan jawaban untuk pertanyaan umum tentang layanan jasa joki coding kami, proses pengerjaan, harga, teknologi, dan keamanan data Anda.',
  path: '/faq',
});

export default function FAQPage() {
  return (
    <>
      <Shade
        corners={['top-left', 'top-right']}
        cornerClass='border-foreground/75 border-t-0 h-12'
        className="h-14 after:content-[''] after:w-full after:h-14 after:bg-gradient-to-t after:from-background after:to-transparent after:inset-0 after:absolute"
      />

      <div className='pt-16'>
        <FAQSection />
        <FAQSchema />
      </div>

      <Shade
        corners={['bottom-left', 'bottom-right']}
        cornerClass='border-foreground/75 border-b-0 h-12'
        className="h-14 after:content-[''] after:w-full after:h-14 after:bg-gradient-to-t after:to-background after:from-transparent after:inset-0 after:absolute"
      />
    </>
  );
}

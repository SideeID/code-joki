import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MessageSquare, Instagram, Bot } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { TextAnimate, BlurFade } from '@/components/animation';

export function CallToActionJoin() {
  const whatsappMessage =
    'Halo, saya tertarik dengan layanan joki coding Anda. Bisakah saya mendapatkan informasi lebih lanjut?';
  const botMessage = 'Dim, layanan apa saja yang tersedia?';
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const encodedBotMessage = encodeURIComponent(botMessage);

  return (
    <section id='join' className='py-20 px-3 text-foreground'>
      <div className='text-center'>
        <TextAnimate
          once
          as={'h2'}
          className='text-balance text-2xl font-semibold lg:text-3xl'
        >
          Dapatkan Hasil Terbaik untuk Proyek Coding Anda
        </TextAnimate>
        <TextAnimate once as={'p'} className='mt-4 max-w-lg mx-auto'>
          Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran
          spesial untuk proyek pertama Anda. Kami siap membantu 24/7 dengan
          solusi cepat dan tepat.
        </TextAnimate>

        <BlurFade inView className='mt-12 flex flex-wrap justify-center gap-4'>
          <Button
            className='bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 shadow-lg'
            asChild
            variant={'default'}
            size='lg'
          >
            <Link
              target='_blank'
              href={`${siteConfig.links.whatsapp}?text=${encodedMessage}`}
            >
              <MessageSquare className='mr-2 h-5 w-5' />
              <span>Chat WhatsApp</span>
            </Link>
          </Button>
          <Button
            className='bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-500 hover:via-pink-400 hover:to-orange-400 shadow-lg'
            asChild
            variant={'default'}
            size='lg'
          >
            <Link target='_blank' href={siteConfig.links.instagram}>
              <Instagram className='mr-2 h-5 w-5' />
              <span>DM Instagram</span>
            </Link>
          </Button>
          <Button
            className='bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-500 hover:to-cyan-400 shadow-lg'
            asChild
            variant={'default'}
            size='lg'
          >
            <Link
              target='_blank'
              href={`https://wa.me/+6281949601347?text=${encodedBotMessage}`}
            >
              <Bot className='mr-2 h-5 w-5' />
              <span>Bot Assistant</span>
            </Link>
          </Button>
        </BlurFade>

        <TextAnimate
          once
          as={'p'}
          className='mt-10 text-sm text-muted-foreground'
        >
          Respon cepat dalam 30 menit • Dukungan 24/7 • Hasil berkualitas
        </TextAnimate>
      </div>
    </section>
  );
}

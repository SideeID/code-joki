'use client';

import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { faqCategories, faqItems } from '@/data/faqs';
import { Search, Info, HelpCircle } from 'lucide-react';
import { BlurFade, TextAnimate } from '@/components/animation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function FAQSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFAQs = faqItems.filter((faq) => {
    const matchesSearch = searchQuery
      ? faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesCategory = selectedCategory
      ? faq.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className='py-12 md:py-24 overflow-hidden flex justify-center items-center'>
      <div className='container px-4 md:px-6 flex flex-col items-center'>
        <div className='relative max-w-4xl mx-auto w-full'>
          {/* Decorative elements */}
          <div
            className='absolute -top-10 -right-12 w-32 h-32 rounded-full bg-primary/5 blur-3xl'
            aria-hidden='true'
          ></div>
          <div
            className='absolute -bottom-10 -left-12 w-32 h-32 rounded-full bg-primary/10 blur-3xl'
            aria-hidden='true'
          ></div>

          {/* Header Section */}
          <div className='relative space-y-2 text-center mb-10'>
            <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4'>
              <HelpCircle className='w-6 h-6 text-primary' />
            </div>
            <TextAnimate
              as='h1'
              className='text-3xl md:text-4xl font-bold mb-3'
              once
            >
              Pertanyaan yang Sering Diajukan
            </TextAnimate>

            <TextAnimate
              as='p'
              className='text-muted-foreground max-w-2xl mx-auto'
              once
              delay={0.1}
            >
              Temukan jawaban untuk pertanyaan umum tentang layanan joki koding
              kami. Jika Anda tidak menemukan jawaban yang Anda cari, silakan
              hubungi tim kami.
            </TextAnimate>
          </div>

          {/* Search and Filter Container */}
          <div className='backdrop-blur-sm bg-background/50 rounded-xl border border-border/50 p-5 md:p-8 shadow-sm mx-auto mb-12 w-full max-w-3xl'>
            {/* Search Input */}
            <div className='relative mb-6'>
              <Search className='absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5' />
              <Input
                placeholder='Cari pertanyaan atau jawaban...'
                className='pl-12 py-6 rounded-lg bg-background shadow-sm border-border/60'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filters - scrollable on mobile */}
            <div className='overflow-x-auto pb-2 -mx-1 hide-scrollbar flex justify-center'>
              <div className='flex gap-2 px-1 min-w-max'>
                <Button
                  variant={selectedCategory === null ? 'default' : 'outline'}
                  size='sm'
                  onClick={() => setSelectedCategory(null)}
                  className='rounded-full shadow-sm'
                >
                  Semua
                </Button>
                {faqCategories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? 'default' : 'outline'
                    }
                    size='sm'
                    onClick={() => setSelectedCategory(category)}
                    className='rounded-full shadow-sm'
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <BlurFade className='max-w-3xl mx-auto w-full'>
            {filteredFAQs.length > 0 ? (
              <div className='rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm overflow-hidden shadow-sm mx-auto'>
                <Accordion
                  type='single'
                  collapsible
                  className='w-full divide-y divide-border/50'
                >
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className={cn(
                        'border-0',
                        index === filteredFAQs.length - 1 ? 'rounded-b-xl' : '',
                        index === 0 ? 'rounded-t-xl' : '',
                      )}
                    >
                      <AccordionTrigger className='px-6 py-4 text-left hover:no-underline text-base md:text-lg hover:bg-muted/30 transition-colors'>
                        <span itemProp='name' className='font-medium'>
                          {faq.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent
                        itemProp='acceptedAnswer'
                        itemScope
                        itemType='https://schema.org/Answer'
                        className='px-6 pb-6'
                      >
                        <div
                          itemProp='text'
                          className='text-muted-foreground prose prose-sm max-w-none'
                        >
                          {faq.answer}
                        </div>
                        {faq.category && (
                          <div className='mt-4 flex items-center'>
                            <span className='text-xs uppercase tracking-wide text-muted-foreground/70 bg-muted px-2 py-1 rounded-md'>
                              {faq.category}
                            </span>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ) : (
              <div className='text-center py-16 border border-dashed rounded-xl bg-background/50 backdrop-blur-sm mx-auto'>
                <Info className='h-12 w-12 mx-auto mb-4 text-muted-foreground' />
                <h3 className='text-lg font-medium mb-2'>
                  Tidak ada hasil yang ditemukan
                </h3>
                <p className='text-muted-foreground max-w-md mx-auto'>
                  Tidak dapat menemukan pertanyaan yang sesuai dengan pencarian
                  Anda. Silakan coba dengan kata kunci lain atau hubungi kami
                  untuk bantuan.
                </p>
                <Button
                  variant='outline'
                  className='mt-4'
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                  }}
                >
                  Reset Pencarian
                </Button>
              </div>
            )}
          </BlurFade>

          {filteredFAQs.length > 0 && (
            <div className='text-center mt-8 w-full'>
              <p className='text-muted-foreground text-sm'>
                Masih memiliki pertanyaan?
                <Link href='/#join' className='text-primary hover:underline ml-1'>
                  Hubungi kami untuk bantuan lebih lanjut
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ChevronDown, Menu } from 'lucide-react';
import { navbarMenus } from './menus';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export const NavigationSheet = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(open);
  }, [open]);
  return (
    <Sheet defaultOpen={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='hover:bg-accent/80 active:scale-95 transition-all'
        >
          <Menu />
          <span className='sr-only'>Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <ul className='flex flex-col px-3 mt-10'>
          {navbarMenus.map((menu) => (
            <li key={menu.label} className='py-2'>
              {menu.url && (
                <Button
                  asChild
                  className='w-full justify-start transition-all hover:text-primary hover:translate-x-1 active:scale-95'
                  variant={'ghost'}
                >
                  <Link onClick={() => setOpen(false)} href={menu.url}>
                    {menu.label}
                  </Link>
                </Button>
              )}
              {menu.items && (
                <Collapsible>
                  <CollapsibleTrigger asChild className='w-full justify-start'>
                    <Button
                      variant={'ghost'}
                      className='w-full justify-start transition-all hover:bg-accent/70 hover:text-primary active:scale-95'
                    >
                      <span>{menu.label}</span>
                      <ChevronDown className='transition-transform duration-200 group-data-[state=open]:rotate-180' />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className='flex flex-col bg-secondary/50 rounded-md mt-1 overflow-hidden'>
                      {menu.items.map((item) => (
                        <li key={item.title} className='ml-5 py-1'>
                          <Button
                            onClick={() => setOpen(false)}
                            asChild
                            variant={'ghost'}
                            className='transition-all hover:text-primary hover:translate-x-2 active:scale-95'
                          >
                            <Link href={item.url}>{item.title}</Link>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              )}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

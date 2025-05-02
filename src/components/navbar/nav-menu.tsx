'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { navbarMenus } from './menus';

export function NavMenu({
  ...props
}: React.ComponentProps<typeof NavigationMenu>) {
  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className='gap-1'>
        {navbarMenus.map((menu) => (
          <NavigationMenuItem key={menu.label}>
            {menu.items ? (
              <>
                <NavigationMenuTrigger className='transition-colors hover:text-primary hover:bg-accent/50 active:scale-95 data-[state=open]:bg-accent'>
                  {menu.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid grid-cols-2 gap-3 md:w-[400px] lg:w-[500px] p-4'>
                    {menu.items.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            className='flex items-start gap-2 p-3 rounded-md transition-all duration-200 
                                      hover:bg-accent hover:text-primary hover:translate-x-1
                                      focus:bg-accent active:scale-95'
                            href={item.url}
                          >
                            {item.icon && <item.icon className='h-5 w-5' />}
                            <div>
                              <div className='text-sm font-medium'>
                                {item.title}
                              </div>
                              <p className='text-xs text-muted-foreground'>
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={menu.url || '#'} passHref>
                <NavigationMenuLink className='transition-all hover:text-primary hover:bg-accent/50 active:scale-95 px-4 py-2 rounded-md'>
                  {menu.label}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

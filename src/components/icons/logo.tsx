'use client';

import Image, { ImageProps } from 'next/image';
import { useTheme } from 'next-themes';

interface LogoProps
  extends Omit<ImageProps, 'src' | 'alt' | 'width' | 'height' | 'priority'> {
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  alt?: string;
  lightSrc?: string;
  darkSrc?: string;
}

export const Logo = ({
  className,
  priority = true,
  width = 100,
  height = 75,
  alt = 'CodeJoki Logo',
  lightSrc = '/SideID-Labs-transparant-2.png',
  darkSrc = '/SideID-Labs-transparant.png',
  ...props
}: LogoProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <Image
      className={className}
      src={isDark ? darkSrc : lightSrc}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      quality={85}
      sizes='(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px'
      {...props}
    />
  );
};

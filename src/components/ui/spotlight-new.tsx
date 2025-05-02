'use client';
import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from 'next-themes';

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
  animated?: boolean;
};

export const Spotlight = ({
  gradientFirst,
  gradientSecond,
  gradientThird,
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
  animated = false,
}: SpotlightProps = {}) => {
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === 'light';

  const lightGradients = {
    first:
      'radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(37, 99, 235, 0.1) 0, rgba(37, 99, 235, 0.05) 50%, rgba(37, 99, 235, 0.02) 80%)',
    second:
      'radial-gradient(50% 50% at 50% 50%, rgba(37, 99, 235, 0.08) 0, rgba(37, 99, 235, 0.04) 80%, transparent 100%)',
    third:
      'radial-gradient(50% 50% at 50% 50%, rgba(37, 99, 235, 0.06) 0, rgba(37, 99, 235, 0.02) 80%, transparent 100%)',
  };

  const darkGradients = {
    first:
      'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(230, 95%, 80%, .08) 0, hsla(210, 95%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)',
    second:
      'radial-gradient(50% 50% at 50% 50%, hsla(230, 95%, 80%, .06) 0, hsla(210, 95%, 55%, .02) 80%, transparent 100%)',
    third:
      'radial-gradient(50% 50% at 50% 50%, hsla(230, 95%, 80%, .04) 0, hsla(210, 95%, 45%, .02) 80%, transparent 100%)',
  };

  const first =
    gradientFirst || (isLight ? lightGradients.first : darkGradients.first);
  const second =
    gradientSecond || (isLight ? lightGradients.second : darkGradients.second);
  const third =
    gradientThird || (isLight ? lightGradients.third : darkGradients.third);

  const Container = animated ? motion.div : 'div';
  const AnimatableDiv = animated ? motion.div : 'div';

  return (
    <Container
      className='pointer-events-none absolute inset-0 h-full w-full'
      {...(animated
        ? {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 1.5 },
          }
        : { style: { opacity: 1 } })}
    >
      {/* Left side gradients - static position if not animated */}
      <AnimatableDiv
        className='absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none'
        {...(animated
          ? {
              animate: { x: [0, xOffset, 0] },
              transition: {
                duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              },
            }
          : {})}
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: first,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className='absolute top-0 left-0'
        />

        <div
          style={{
            transform: 'rotate(-45deg) translate(5%, -50%)',
            background: second,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className='absolute top-0 left-0 origin-top-left'
        />

        <div
          style={{
            transform: 'rotate(-45deg) translate(-180%, -70%)',
            background: third,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className='absolute top-0 left-0 origin-top-left'
        />
      </AnimatableDiv>

      {/* Right side gradients - static position if not animated */}
      <AnimatableDiv
        className='absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none'
        {...(animated
          ? {
              animate: { x: [0, -xOffset, 0] },
              transition: {
                duration,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              },
            }
          : {})}
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: first,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className='absolute top-0 right-0'
        />

        <div
          style={{
            transform: 'rotate(45deg) translate(-5%, -50%)',
            background: second,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className='absolute top-0 right-0 origin-top-right'
        />

        <div
          style={{
            transform: 'rotate(45deg) translate(180%, -70%)',
            background: third,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className='absolute top-0 right-0 origin-top-right'
        />
      </AnimatableDiv>
    </Container>
  );
};

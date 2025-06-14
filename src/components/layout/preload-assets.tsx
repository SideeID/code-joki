'use client';

import { useEffect } from 'react';

export const PreloadCriticalAssets = () => {
  useEffect(() => {
    const criticalImages = [
      '/SideID-Labs-transparant-2.png',
      '/SideID-Labs-transparant.png',
      '/banner-2.png',
    ];

    criticalImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return null;
};

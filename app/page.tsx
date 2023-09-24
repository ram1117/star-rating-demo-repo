'use client';

import React from 'react';
import StarRatings from '@/components/StarRatings';

export default function Home() {
  return (
    <StarRatings
      rating={2.8}
      starFillColor="red"
      responsiveSizes={{ xs: 20, sm: 24, md: 28, lg: 36, xl: 42, '2xl': 46 }}
    />
  );
}

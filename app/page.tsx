'use client';

import React from 'react';
import StarRatings from 'react-five-star-rating';

export default function Home() {
  return (
    <StarRatings
      rating={2.8}
      containerClassName="star-rating-container"
      concise
    />
  );
}

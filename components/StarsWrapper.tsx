'use client';

import React, { useEffect, useState } from 'react';
import Star from './Star';

interface StarsWrapperProps {
  rating: number;
  containerClassName?: string;
  containerStyle?: {};
  starClassName?: string;
  starStyle?: {};
  starFillColor?: {};
  starStrokeColor?: {};
}

const StarsWrapper = ({
  rating,
  containerClassName = '',
  containerStyle = {},
  starClassName = '',
  starStyle = {},
  starFillColor = 'gold',
  starStrokeColor = 'black',
}: StarsWrapperProps) => {


  const ratingArr = [];
  for (let i = 1; i <= 5; i++) {
    if (rating > 0) {
      if (rating < 1) {
        ratingArr.push(Math.floor(rating * 100));
        rating -= rating;
      } else {
        ratingArr.push(100);
        rating -= 1;
      }
    } else {
      ratingArr.push(0);
    }
  }
  return (
    <div className={containerClassName} style={containerStyle}>
      {ratingArr.map((offsetValue,index) => (
        <Star
          key={`${offsetValue}${index}`}
          height={36}
          width={36}
          starStrokeColor={starStrokeColor}
          starFillColor={starFillColor}
          starClassName={starClassName}
          starStyle={starStyle}
          offSetValue={offsetValue}
        />
      ))}
    </div>
  );
};

export default StarsWrapper;

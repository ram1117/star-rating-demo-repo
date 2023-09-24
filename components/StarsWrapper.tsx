import React from 'react';
import Star from './Star';

interface StarsWrapperProps {
  rating: number;
  containerClassName?: string;
  containerStyle?: {};
  starClassName?: string;
  starStyle?: {};
  starFillColor?: string;
  starStrokeColor?: string;
  starStrokeWidth?: number;
  concise?: boolean;
}

const StarsWrapper = ({
  rating,
  containerClassName = '',
  containerStyle = {},
  starClassName = '',
  starStyle = {},
  starFillColor = 'gold',
  starStrokeColor = 'black',
  starStrokeWidth = 0.5,
  concise = false,
}: StarsWrapperProps) => {
  const ratingArr = [];
  const limit = concise ? (rating) : 5;

  for (let i = 0; i < limit; i++) {
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
      {ratingArr.map((offsetValue, index) => (
        <Star
          key={`${offsetValue}${index}`}
          imageSize={36}
          starStrokeColor={starStrokeColor}
          starFillColor={starFillColor}
          starClassName={starClassName}
          starStyle={starStyle}
          offSetValue={offsetValue}
          starStrokeWidth={starStrokeWidth}
        />
      ))}
    </div>
  );
};

export default StarsWrapper;

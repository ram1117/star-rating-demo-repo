import React from 'react';
import Star from './Star';
import useBreakPoints from '@/app/hooks/useBreakPoints';

interface StarRatingsProps {
  rating: number;
  imageSize?: number;
  responsiveSizes?: { [key: string]: number };
  containerClassName?: string;
  containerStyle?: {};
  starClassName?: string;
  starStyle?: {};
  starFillColor?: string;
  starStrokeColor?: string;
  starStrokeWidth?: number;
  concise?: boolean;
}

const StarRatings = ({
  rating,
  imageSize = 18,
  responsiveSizes = {},
  containerClassName = '',
  containerStyle = {},
  starClassName = '',
  starStyle = {},
  starFillColor = 'gold',
  starStrokeColor = 'black',
  starStrokeWidth = 0.5,
  concise = false,
}: StarRatingsProps) => {
  const ratingArr = [];
  const limit = concise ? rating : 5;

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

  const { active } = useBreakPoints();
  const starSize =
    Object.keys(responsiveSizes).length === 0
      ? imageSize
      : responsiveSizes[active];

  return (
    <div className={containerClassName} style={containerStyle}>
      {ratingArr.map((offsetValue, index) => (
        <Star
          key={`${offsetValue}${index}`}
          imageSize={starSize}
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

export default StarRatings;

import React from 'react';
import Star from './Star';

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
  containerClassName = '',
  containerStyle = {height:24,width:24},
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

  return (
    <div style={{display:'flex',flexDirection:'row'}}>
      {ratingArr.map((offsetValue, index) => (
        <div
          className={containerClassName}
          style={containerStyle}
          key={`${offsetValue}${index}`}
        >
          <Star
            
            starStrokeColor={starStrokeColor}
            starFillColor={starFillColor}
            starClassName={starClassName}
            starStyle={starStyle}
            offSetValue={offsetValue}
            starStrokeWidth={starStrokeWidth}
          />
        </div>
      ))}
    </div>
  );
};

export default StarRatings;

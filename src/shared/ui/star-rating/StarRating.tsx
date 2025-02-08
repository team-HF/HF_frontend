import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import * as S from './style';

interface InteractiveStarRatingProps {
  rating: number;
  onChange: (newRating: number) => void;
}

export default function StarRating({
  rating,
  onChange,
}: InteractiveStarRatingProps) {
  const handleClick = (value: number) => {
    onChange(value);
  };

  //별점에 따른 아이콘 결정
  const computeStarIcon = (starIndex: number) => {
    if (rating >= starIndex) {
      return <FaStar />;
    } else if (rating >= starIndex - 0.5) {
      return <FaStarHalfAlt />;
    } else {
      return <FaRegStar />;
    }
  };

  return (
    <S.StarWrapper>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          onClick={() => handleClick(i)}
          style={{ cursor: 'pointer' }}
        >
          {computeStarIcon(i)}
        </span>
      ))}
    </S.StarWrapper>
  );
}

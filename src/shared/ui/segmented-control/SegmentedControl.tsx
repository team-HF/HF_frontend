import { useState } from 'react';
import * as S from './style';

type SegmentedControlProps = {
  firstLabel: string;
  secondLabel: string;
};

export default function SegmentedControl({
  firstLabel,
  secondLabel,
}: SegmentedControlProps) {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <S.SegmentedControlContainer>
      <S.Segment
        isSelected={selectedOption === 0}
        onClick={() => setSelectedOption(0)}
      >
        {firstLabel}
      </S.Segment>
      <S.Segment
        isSelected={selectedOption === 1}
        onClick={() => setSelectedOption(1)}
      >
        {secondLabel}
      </S.Segment>
    </S.SegmentedControlContainer>
  );
}

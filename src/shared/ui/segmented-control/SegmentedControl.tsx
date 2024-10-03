import { useState } from 'react';
import * as s from './style';

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
    <s.SegmentedControlContainer>
      <s.Segment
        isSelected={selectedOption === 0}
        onClick={() => setSelectedOption(0)}
      >
        {firstLabel}
      </s.Segment>
      <s.Segment
        isSelected={selectedOption === 1}
        onClick={() => setSelectedOption(1)}
      >
        {secondLabel}
      </s.Segment>
    </s.SegmentedControlContainer>
  );
}

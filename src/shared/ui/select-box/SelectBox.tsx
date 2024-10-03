import React from 'react';
import * as s from './style';

type SelectBoxProps = {
  radius: '4px' | '34px';
  isSelected: boolean;
  onSelect: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function SelectBox({
  radius,
  isSelected,
  onSelect,
}: SelectBoxProps) {
  return (
    <s.SelectBoxContainer
      isSelected={isSelected}
      radius={radius}
      onClick={onSelect}
    >
      {isSelected && radius === '4px' && (
        <s.CheckIcon src="/svg/check-icon.svg" alt="check-icon" />
      )}
      {isSelected && radius === '34px' && <s.Circle />}
    </s.SelectBoxContainer>
  );
}

import { useState } from 'react';
import * as S from './review-label-style';

type LabelProps = {
  text: string;
};
export default function ReviewLabel({ text }: LabelProps) {
  const [selected, setSelected] = useState(false);

  const toggleSelection = () => {
    setSelected(!selected);
  };

  return (
    <S.LabelContainer selected={selected} onClick={toggleSelection}>
      <S.LabelText selected={selected}>{text}</S.LabelText>
    </S.LabelContainer>
  );
}

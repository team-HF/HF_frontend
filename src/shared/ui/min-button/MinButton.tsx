import * as S from './style';

type buttonShape = 'square' | 'around' | 'semi-around';

type buttonStyle =
  | 'style_1'
  | 'style_2'
  | 'style_3'
  | 'style_4'
  | 'style_5'
  | 'style_6';

export interface minButtonProps {
  name?: string;
  button_shape: buttonShape;
  button_style: buttonStyle;
  onClick?: () => void;
}

const MinButton = ({
  name,
  button_shape,
  button_style,
  onClick,
}: minButtonProps) => {
  return (
    <S.Container
      button_shape={button_shape}
      button_style={button_style}
      onClick={onClick}
    >
      {name}
    </S.Container>
  );
};

export default MinButton;

import * as S from './hashtag.style';

type HashtagProps = {
  text: string;
};

export default function Hashtag({ text }: HashtagProps) {
  return <S.HashtagBox>{text}</S.HashtagBox>;
}

import * as s from './hashtag.style';

type HashtagProps = {
  text: string;
};

export default function Hashtag({ text }: HashtagProps) {
  return <s.HashtagBox>{text}</s.HashtagBox>;
}

import { useEffect, useState } from 'react';
import BackHeader from '../../shared/ui/back-header/BackHeader';
import * as S from './style';
import LargeButton from '../../shared/ui/large-button/LargeButton';
import { useProfileSettingStore } from '../../features/profile-setting/store/profile-setting-store';
import { useNavigate } from 'react-router-dom';
export default function Introduction() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const introduction = useProfileSettingStore((state) => state.introduction);
  const setIntroduction = useProfileSettingStore(
    (state) => state.setIntroduction
  );
  const maxLength = 500;
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
      setIntroduction(e.target.value);
    }
  };
  const onClick = () => {
    navigate('/profile-setting');
  };
  useEffect(() => {
    if (introduction) {
      setText(introduction);
    }
  }, [introduction]);
  return (
    <S.Container>
      <BackHeader text="" />
      <S.TextWrapper>
        <S.TextArea
          placeholder="나를 소개할 한줄을 작성해주세요."
          value={text}
          onChange={handleTextChange}
        ></S.TextArea>
        <S.CountingTextLengthWrapper>
          <S.CountingText>
            {text.length}/{maxLength}
          </S.CountingText>
        </S.CountingTextLengthWrapper>
      </S.TextWrapper>
      <S.ButtonWrapper>
        <LargeButton text="저장하기" onClick={onClick} />
      </S.ButtonWrapper>
    </S.Container>
  );
}

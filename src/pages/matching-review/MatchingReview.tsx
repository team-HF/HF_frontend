import BackHeader from '../../shared/ui/back-header/BackHeader';
import * as S from './style';
import { useGetMyData } from '../../shared/api/useGetMyData';
import StarRating from '../../shared/ui/star-rating/StarRating';
import { useState } from 'react';
import Label from '../../shared/ui/label/Label';
import ReviewLabel from '../../features/Matching-review/ui/ReviewLabel';
import WriteReviewButton from '../../features/Matching-review/ui/WriteReviewButton';

export default function MatchingReview() {
  const { data: exData } = useGetMyData();
  const [rating, setRating] = useState<number>(0);

  const GoodLabels = [
    '자세를 꼼꼼하게 알려줘요',
    '속도가 적당하고 쉽게 알려줘요',
    '목적에 부합하는 대화가 이루어져요',
    '시간 약속을 잘 지켜요',
    '친절하고 배려심이 좋아요',
  ];

  const BadLabels = [
    '운동 자세를 배우는데 아쉬웠어요',
    '진행 속도가 너무 빨랐어요',
    '목적에 부합하지 않은 대화가 많았어요',
    '약속 시간이 아쉬워요',
    '조금 더 친절했으면 좋겠어요.',
  ];

  return (
    <S.Container>
      <BackHeader text="" />
      <S.UserImageWrapper>
        <S.UserImage
          src="/svg/default-profile-icon.svg"
          alt="default-profile"
        />
      </S.UserImageWrapper>
      <S.QuestionWrapper>
        <S.QuestionUserName>{exData?.nickname}님과</S.QuestionUserName>
        <S.QuestionStyle>운동은 어떠셨나요?</S.QuestionStyle>
      </S.QuestionWrapper>
      <S.StarWrapper>
        <StarRating rating={rating} onChange={setRating} />
      </S.StarWrapper>
      <S.SelectedQuestionWrapper>
        <S.StyledSpan>후기를 남겨주세요</S.StyledSpan>
        <S.StyledSelectSpan>해당 사항을 모두 선택해주세요</S.StyledSelectSpan>
      </S.SelectedQuestionWrapper>
      <S.LabelWithLines style={{ marginTop: '32px' }}>
        <S.Line />
        <Label
          text="좋아요"
          fontColor="#3666FD"
          backgroundColor="#F6FAFF"
          width={120}
          height={31}
        />
        <S.Line />
      </S.LabelWithLines>
      <S.LabelsWrapper>
        {GoodLabels.map((labelText, index) => (
          <ReviewLabel key={index} text={labelText} />
        ))}
      </S.LabelsWrapper>
      <S.LabelWithLines style={{ marginTop: '16px' }}>
        <S.Line />
        <Label
          text="아쉬워요"
          fontColor="#BF3232  "
          backgroundColor="#FFECEC"
          width={120}
          height={31}
        />
        <S.Line />
      </S.LabelWithLines>
      <S.LabelsWrapper>
        {BadLabels.map((labelText, index) => (
          <ReviewLabel key={index} text={labelText} />
        ))}
      </S.LabelsWrapper>
      <S.ButtonWrapper>
        <WriteReviewButton />
      </S.ButtonWrapper>
    </S.Container>
  );
}

import React from 'react';
import * as S from './chat-request-bubble.style';

const MatchingBubble: React.FC = () => {
  return (
    <S.Container>
      <S.Card>
        <S.HeaderWrapper>
          <S.Header>매칭 완료</S.Header>
        </S.HeaderWrapper>
        <S.Content>
          <S.Row>
            <S.Label>날짜:</S.Label>
            <S.Value>12월 16일</S.Value>
          </S.Row>
          <S.Row>
            <S.Label>시간:</S.Label>
            <S.Value>PM 7:35</S.Value>
          </S.Row>
          <S.Row>
            <S.Label>장소:</S.Label>
            <S.Value>송파구 퍼스트휘트니스...</S.Value>
          </S.Row>
        </S.Content>
        <S.ButtonWrapper>
          <S.Button onClick={() => console.log('매칭 조회 clicked')}>
            매칭 조회
          </S.Button>
        </S.ButtonWrapper>
      </S.Card>
    </S.Container>
  );
};

export default MatchingBubble;

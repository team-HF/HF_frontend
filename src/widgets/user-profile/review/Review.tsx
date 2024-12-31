import * as S from "./style";
import { useState } from "react";

const Review = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <S.Container>
      <S.Box className="gap_4 align_items_center">
        <S.Title>리뷰</S.Title>
        <S.Title className="review_point">4.3</S.Title>
        <S.ReviewCount>(10)</S.ReviewCount>
        <S.Divider />
      </S.Box>
      <S.ReviewGraphContainer>
        <S.GraphBackground percentage={50}>
          <S.GraphFront />
        </S.GraphBackground>
        <S.Box className="column align_items_center">
          <S.Box className="gap_8">
            <S.ElementText>좋아요</S.ElementText>
            <S.ElementText className="positive">50%</S.ElementText>
          </S.Box>
          <S.Box className="gap_8">
            <S.ElementText>아쉬워요</S.ElementText>
            <S.ElementText className="negative">50%</S.ElementText>
          </S.Box>
        </S.Box>
      </S.ReviewGraphContainer>
      <S.Box className="column gap_16">
        <S.Box className="column gap_8">
          <S.PositiveReviewCard positive={true}>
            <S.ReviewCardText>속도가 적당하고 쉬게 알려줘요</S.ReviewCardText>
            <S.ReviewCardText>7개</S.ReviewCardText>
          </S.PositiveReviewCard>
          <S.PositiveReviewCard positive={true}>
            <S.ReviewCardText>속도가 적당하고 쉬게 알려줘요</S.ReviewCardText>
            <S.ReviewCardText>7개</S.ReviewCardText>
          </S.PositiveReviewCard>
          <S.PositiveReviewCard positive={false}>
            <S.ReviewCardText>속도가 적당하고 쉬게 알려줘요</S.ReviewCardText>
            <S.ReviewCardText>7개</S.ReviewCardText>
          </S.PositiveReviewCard>
        </S.Box>
        <S.DetailBtn onClick={() => setOpen(!open)}>
          {open ? "그만보기" : "자세히 보기"}
        </S.DetailBtn>
      </S.Box>
    </S.Container>
  );
};

export default Review;

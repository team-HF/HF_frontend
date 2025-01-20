import * as S from "./style";
import { useState } from "react";
import { useUserDetailStore } from "../../../pages/profile/store/user-detail-store";
import { useGetReviewContent as getReviewContent } from "../../../shared/utils/useGetReviewContent";

const Review = () => {
  const { userDetail } = useUserDetailStore();

  const [open, setOpen] = useState<boolean>(false);

  const briefReview = () => {
    const reviews = [
      userDetail?.reviews.good[0],
      userDetail?.reviews.notGood[0],
    ];
    return reviews.map(
      (review, idx) =>
        review && (
          <S.PositiveReviewCard
            key={`most_${idx ? "negative" : "positive"}_review_card`}
            $positive={idx ? false : true}
          >
            <S.ReviewCardText>
              {getReviewContent(idx ? false : true, review?.reviewDetailId)}
            </S.ReviewCardText>
            <S.ReviewCardText>{review?.reviewDetailCount}개</S.ReviewCardText>
          </S.PositiveReviewCard>
        )
    );
  };

  const positiveReviewCards = userDetail?.reviews.good.map((review) => {
    return (
      <S.PositiveReviewCard
        key={`positive_review_${review.reviewDetailId}`}
        $positive={true}
      >
        <S.ReviewCardText>
          {getReviewContent(true, review.reviewDetailId)}
        </S.ReviewCardText>
        <S.ReviewCardText>{review?.reviewDetailCount}개</S.ReviewCardText>
      </S.PositiveReviewCard>
    );
  });

  const negativeReviewCards = userDetail?.reviews.notGood.map((review) => (
    <S.PositiveReviewCard
      key={`negative_review_${review.reviewDetailId}`}
      $positive={false}
    >
      <S.ReviewCardText>
        {getReviewContent(false, review.reviewDetailId)}
      </S.ReviewCardText>
      <S.ReviewCardText>{review?.reviewDetailCount}개</S.ReviewCardText>
    </S.PositiveReviewCard>
  ));

  return (
    <S.Container>
      <S.Box className="gap_4 align_items_center">
        <S.Title>리뷰</S.Title>
        <S.Title className="review_point">
          {userDetail.averageReviewScore}
        </S.Title>
        <S.ReviewCount>({userDetail?.reviewCount})</S.ReviewCount>
        <S.Divider />
      </S.Box>
      {userDetail?.reviews.good.length && userDetail.reviews.notGood.length ? (
        <>
          <S.ReviewGraphContainer>
            <S.GraphBackground
              percentage={Math.round(userDetail.averageReviewScore * 20)}
            >
              <S.GraphFront />
            </S.GraphBackground>
            <S.Box className="column align_items_center">
              <S.Box className="gap_8">
                <S.ElementText>좋아요</S.ElementText>
                <S.ElementText className="positive">
                  {Math.round(userDetail.averageReviewScore * 20)}%
                </S.ElementText>
              </S.Box>
              <S.Box className="gap_8">
                <S.ElementText>아쉬워요</S.ElementText>
                <S.ElementText className="negative">
                  {100 - Math.round(userDetail.averageReviewScore * 20)}%
                </S.ElementText>
              </S.Box>
            </S.Box>
          </S.ReviewGraphContainer>
          <S.Box className="column gap_16">
            <S.Box className="column gap_8">
              {open ? (
                <>
                  {positiveReviewCards}
                  {negativeReviewCards}
                </>
              ) : (
                briefReview()
              )}
            </S.Box>
            <S.DetailBtn onClick={() => setOpen(!open)}>
              {open ? "그만보기" : "자세히 보기"}
            </S.DetailBtn>
          </S.Box>
        </>
      ) : (
        <S.EmptyReview>
          <S.EmptyContent>
            아직 작성된 리뷰가 없습니다.
            <br />
            함께 운동해보고 리뷰를 남겨주세요!
          </S.EmptyContent>
        </S.EmptyReview>
      )}
    </S.Container>
  );
};

export default Review;

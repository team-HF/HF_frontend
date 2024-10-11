import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  width: 20rem;
  border-top: 1px solid #f1f3f5;
  @media (min-width: 768px) and (max-width: 1919px) {
    width: 40rem;
  }
`;
export const InfoText = styled.span`
  width: 100%;
  font-size: 11px;
  line-height: 1.273rem;
  letter-spacing: 0.003rem;
  color: #8e8e93;
`;
export const Comment = styled.p`
  margin: 1rem 0;
  font-size: 14px;
  line-height: 1.5rem;
  letter-spacing: -0.005rem;
  color: #4d4d4d;
`;
export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FavoriteBtn = styled.img<{ src: string }>`
  filter: invert(34%) sepia(100%) saturate(600%) hue-rotate(0deg)
    brightness(90%) contrast(100%);
`;
export const NonFavorite = styled.img<{ src: string }>``;

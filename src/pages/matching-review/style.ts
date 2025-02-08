import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 40rem;
  }

  @media (min-width: 1200px) {
    width: 67.5rem;
  }
`;

export const UserImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0px 0px 1px 0px #00000014, 0px 1px 4px 0px #00000014,
    0px 2px 8px 0px #0000001f;
  border-radius: 50%;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

export const UserImage = styled.img`
  width: 100%;
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;
export const QuestionUserName = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: 30.01px;
  letter-spacing: -0.0194em;
  text-align: center;
`;

export const QuestionStyle = styled.span`
  font-size: 22px;
  font-weight: 700;
  line-height: 30.01px;
  letter-spacing: -0.0194em;
  text-align: center;
`;

export const StarWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 8px;
`;

export const SelectedQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24px;
`;

export const StyledSpan = styled.span`
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: #000000;
`;
export const StyledSelectSpan = styled.span`
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.0031em;
  text-align: center;
  color: #000000;
`;

export const LabelWithLines = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 16px 0px;
`;

export const Line = styled.hr`
  flex: 1;
  height: 1px;
  border: none;
  background-color: #e0e0e0;
  margin: 0;
`;

export const LabelsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 40px;
`;

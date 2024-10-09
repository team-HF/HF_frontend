import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  padding: 10px 0px;
  border-radius: 8px 8px 0px 0px;
  box-shadow: 10px 0px 24px rgba(0, 0, 0, 0.1);
`;
export const Divider_1 = styled.hr`
  width: 46px;
  height: 2px;
  border: 0px;
  border-radius: 2px;
  background-color: #d9d9d9;
`;
export const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
  width: 100%;
`;
export const Title = styled.span`
  width: 100%;
  padding: 10px 0px 16px 0px;
  font-size: 17px;
  font-weight: 700;
`;
export const Divider_2 = styled.hr`
  width: 100%;
  height: 1px;
  border: 0px;
  background-color: #ededed;
`;
export const FiltersBox = styled.div`
  display: flex;
  padding: 10px 0px;
`;
export const Filter = styled.div`
  padding: 10px;
  border-radius: 34px;
  background-color: #f0f0f0;
  color: #8e8e8e;
  margin-right: 8px;
  &:last-child {
    margin: 0px;
  }
`;
export const BtnBox = styled.div`
  display: flex;
  padding: 8px 20px;
`;
export const ResetBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  margin-right: 8px;
  border: 0px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  color: #868e96;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;
export const ResetIcon = styled.img<{ src: string }>`
  margin-right: 4px;
`;
export const DoneBtn = styled.button`
  width: 203px;
  padding: 16px 20px;
  border: 0px;
  border-radius: 8px;
  background-color: #6541f2;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

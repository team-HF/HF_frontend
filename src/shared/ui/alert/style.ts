import styled from "styled-components";
import { theme } from "../../../app/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  width: 335px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
`;
export const CloseBtn = styled.button<{ src: string }>`
  border: 0px;
  width: 30px;
  height: 30px;
  background-color: white;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-position: center;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Contents = styled.p`
  text-align: center;
  width: 100%;
  font-size: 14px;
  line-height: 36px;
  overflow-wrap: break-word;
`;
export const CheckBtn = styled.button`
  background-color: ${theme.colors.main};
  border: 0px;
  border-radius: 8px;
  padding: 10px 14px;
  margin-top: 14px;
  width: 114px;
  color: ${theme.font.colors.white};
  font-size: 16px;
  font-weight: 500;
`;

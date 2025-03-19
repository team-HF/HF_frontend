import styled from 'styled-components';

export const Container = styled.div<{ type: string }>`
  width: 320px;
  height: 100vh;
  border: 1px solid #e8e3fd;
  border-radius: 8px;
  background: ${(props) => (props.type === 'EXPIRED' ? '#DEE2E6' : '#ffffff')};
  padding: 10px;
  gap: 8px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 40rem;
  }
`;
export const CouponTitleWrapper = styled.div`
  display: flex;
`;
export const CouponTitle = styled.span`
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
`;

export const CouponDescriptionWrapper = styled.div`
  display: flex;
`;
export const CouponDescription = styled.span`
  font-size: 15px;
  font-weight: 400;
  line-height: 22.01px;
`;

export const CouponTypeWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const CouponType = styled.span`
  display: flex;
  font-size: 11px;
  font-weight: 700;
  line-height: 14px;
  margin-left: auto;
`;

export const CouponDateWrapper = styled.div`
  display: flex;
`;
export const CouponDate = styled.span`
  font-size: 11px;
  font-weight: 400;
  line-height: 14px;
`;

export const FilterContainer = styled.div`
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: 20px;
  @media (min-width: 768px) {
    margin-right: 0px;
  }
`;

export const FilterButton = styled.div`
  display: flex;
  width: 140px;
  height: 32px;
  padding: 8px 16px;
  background-color: #fff;
  border: 1px solid #cfc4fb;
  border-radius: 8px;
  cursor: pointer;
  align-items: center;
  font-size: 14px;
  color: #000000;
  box-sizing: border-box;
  margin-top: -10px;

  &:hover {
    background-color: #e9e4fc;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  box-shadow: 4px 4px 8px 0px #00000040;
  z-index: 101;
  top: calc(100% + 8px);
  border: 1px solid #cfc4fb;
  width: 140px;
  height: 136px;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  line-height: 22.01px;
  font-weight: 400;
  color: #000000;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #e9e4fc;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #cfc4fb;
  }
`;

export const DropdownArrowWrapper = styled.div`
  display: flex;
  margin-left: auto;
`;

import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 8.75rem;
  height: 2.125rem;
  padding: 0.313rem 0.375rem;
  border: 0.063rem solid #e8e3fd;
  border-radius: 0.5rem;
  gap: 0.5rem;
  cursor: pointer;
`;
export const ArrowIcon = styled.img`
  height: 24px;
  &.arrow-up {
    transform: rotate(180deg);
  }
`;
export const CurrentFilter = styled.span`
  width: 100%;
  height: 24px;
  text-align: center;
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.01rem;
  color: #000000;
`;
export const FilterList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 2.5rem;
  left: 0;
  z-index: 1;
  width: 8.75rem;
  background-color: white;
  border: 0.063rem solid #e8e3fd;
  border-radius: 0.5rem;
  cursor: pointer;
`;
export const Filter = styled.span`
  padding: 0.375rem;
  text-align: center;
  border-bottom: 1px solid #e8e3fd;
  font-size: 0.938rem;
  line-height: 1.467rem;
  letter-spacing: -0.01rem;
  color: #000000;
  &:hover {
    background-color: #e8e3fd;
  }
  &:last-child {
    border: 0;
  }
`;

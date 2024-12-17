import styled from "styled-components";

export const Container = styled.div`
  // 시작일, 종료일 칸이 너무 작아서 스타일 변경이 필요함
  display: grid;
  gap: 0.5rem;
`;
export const Input = styled.input`
  padding: 0.625rem;
  height: 34px;
  border: 0.0625rem solid #f3e9f3;
  border-radius: 0.25rem;
  font-size: 0.688rem;
  font-weight: 700;
  line-height: 1.273rem;
  letter-spacing: -0.003rem;
  text-align: center;
  &::placeholder {
    color: #8e8e8e;
  }
  &:focus {
    outline: none;
    border-color: #000000;
  }
  &.spec_date {
    position: relative;
    &::-webkit-calendar-picker-indicator {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: none;
      cursor: pointer;
    }
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: attr(placeholder);
      color: gray;
    }
    &:not(:focus):invalid {
      &::-webkit-datetime-edit-text,
      &::-webkit-datetime-edit-month-field,
      &::-webkit-datetime-edit-day-field,
      &::-webkit-datetime-edit-year-field {
        display: none;
      }
    }
    &:valid::before {
      display: none;
    }
  }
`;

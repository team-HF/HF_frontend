import { styled } from 'styled-components';

export const CalendarContainer = styled.div`
  width: 122px;
  height: 48px;
  position: relative;

  .react-datepicker__input-container input {
    width: 20.125rem;
    height: 2.125rem;
    border: 1px solid #cccccc;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: #000000;

    &:focus {
      outline: none;
      border: 1px solid #000000;
    }
  }
`;

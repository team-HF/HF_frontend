import { styled } from 'styled-components';

export const CalendarContainer = styled.div`
  width: 122px;
  position: relative;

  .react-datepicker__header {
    border-radius: 20px 20px 0 0;
    background-color: ${({ theme }) => theme.colors.main};
  }
  .react-datepicker {
    background-color: white;
    border-color: #000000;
    border-radius: 20px;
  }

  .react-datepicker__header .react-datepicker__current-month {
    color: #ffffff;
  }
  .react-datepicker__header .react-datepicker__day-name {
    color: #ffffff;
  }

  .react-datepicker__day--weekend {
    color: #ff0000;
  }
  .react-datepicker__day--disabled.react-datepicker__day--weekend {
    color: #ccc;
  }

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

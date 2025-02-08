import { styled } from 'styled-components';

export const CalendarContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 10005;

  react-datepicker__input-container {
    width: 100%;
  }

  .react-datepicker__input-container input::placeholder {
    color: #999999;
  }
  .react-datepicker__header {
    border-radius: 20px 20px 0 0;
    background-color: #000000;
  }
  .react-datepicker {
    background-color: #ffffff;
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
  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container input {
    width: 100%;
    height: 2.125rem;
    border: none;
    border-bottom: 1px solid #ededed;
    padding: 0.5rem;
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: #000000;

    &:focus {
      outline: none;
      border-bottom: 1px solid #000000;
    }
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__month-dropdown-container,
  .react-datepicker__year-dropdown-container {
    select {
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 4px;
      font-size: 1rem;
      color: #333;
      cursor: pointer;
      appearance: none;
    }

    select::-ms-expand {
      display: none;
    }
  }
`;

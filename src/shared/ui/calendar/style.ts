import { styled } from 'styled-components';

export const CalendarContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 10005;

  .react-datepicker {
    /* 배경, 테두리, 그림자 등 달력 전체 컨테이너 스타일 */
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 8px;
  }

  /* 달력 상단(요일 영역) 스타일 */
  .react-datepicker__header {
    background-color: #fff;
    border: none;
    padding: 0;
  }

  /* 요일 이름이 표시되는 영역 (예: 월, 화, 수...) */
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    margin-bottom: 4px;
  }

  /* 요일 이름(월, 화, 수, ...) 각각 스타일 */
  .react-datepicker__day-name {
    width: 2rem;
    text-align: center;
    font-size: 0.875rem;
    color: #666;
    /* 요일 줄자 아래쪽에 약간 간격 */
    margin-bottom: 4px;
  }

  /* 주(week) 한 줄 */
  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }

  /* 각 날짜(day) 스타일 */
  .react-datepicker__day {
    width: 2rem;
    line-height: 2rem;
    text-align: center;
    margin: 2px 0;
    border-radius: 50%;
    font-size: 0.875rem;
    cursor: pointer;
    color: #333;

    &:hover {
      background-color: rgba(101, 65, 242, 0.7);
    }
  }

  /* 오늘 날짜 강조
  .react-datepicker__day--today {
    font-weight: bold;
    border: 1px solid #7541F2;
    border-radius: 50%;
  } */

  /* 선택된 날짜 스타일 */
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: #6541f2;
    color: #fff;
  }

  /* 다른 달에 속한 날짜(이번 달이 아닌 날짜)는 흐리게 */
  .react-datepicker__day--outside-month {
    color: #ccc;
    cursor: default;
  }

  /* 비활성화된 날짜 (minDate 이전 ) */
  .react-datepicker__day--disabled {
    color: #ccc;
    cursor: not-allowed;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__input-container {
    display: none;
  }

  .myDatePickerPopper {
    z-index: 10005;
  }
`;

export const Header = styled.div`
  /* 달력 헤더(년/월 select, 좌우 버튼) 컨테이너 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  margin-bottom: 4px;
`;

export const ArrowButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  color: #333;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  gap: 8px;

  select {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 4px 8px;
    font-size: 0.875rem;
    color: #333;
    background-color: #fff;
    cursor: pointer;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

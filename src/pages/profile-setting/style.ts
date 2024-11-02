import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  width: 22.5rem;
  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 세로 방향 */
    width: 40rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    /* 태블릿 가로 방향 */
    width: 40rem;
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 67.5rem;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 세로 방향 */
    width: 40rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    /* 태블릿 가로 방향 */
    width: 40rem;
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 67.5rem;
  }
`;
export const ProfileIconContainer = styled.div`
  position: relative;
  width: 7.5rem;
  height: 7.5rem;
  background-color: #ffffff;
  border-radius: 100%;
  margin: 0.6875rem auto 0 auto;
  box-shadow: 0px 0px 1px 0px #00000014;
  box-shadow: 0px 1px 4px 0px #00000014;
  box-shadow: 0px 2px 8px 0px #0000001f;
  align-items: center;
  justify-content: center;
`;

export const ProfileDefaultIcon = styled.div`
  width: 100%;
  height: 100%;
  background: url('/svg/default-icon.svg');
  background-size: cover;
  border-radius: 100%;
`;

export const ProfileUploadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
`;

export const ProfileChangeButton = styled.label`
  display: flex;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 1px 0px #00000014, 0px 1px 2px 0px #0000001f;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

export const ProfileChangeImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 1.25rem;
  margin-top: 1.8125rem;
  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 세로 방향 */
    width: 40rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    /* 태블릿 가로 방향 */
    width: 40rem;
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 67.5rem;
  }
`;
export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5625rem;
`;

export const Label = styled.label`
  font-size: 1.0625rem;
  line-height: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.375rem;
  color: #000000;
`;

export const Input = styled.input`
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
    border-color: #000000;
  }
  &::placeholder {
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: #999999;
    letter-spacing: -0.03rem;
    text-align: left;
    font-weight: 400;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
  justify-content: center;
  margin-top: 80px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  margin-left: -10px;
  margin-top: 0.25rem;
  color: #ff0000;
  padding: 0.5rem;
`;

export const StyledRadio = styled.input`
  display: none;
`;

export const CustomRadio = styled.label<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  margin-right: 24px;
  cursor: pointer;

  &::before {
    content: '';
    width: 18px;
    height: 18px;
    border: ${({ $isSelected }) =>
      $isSelected ? '1.5px solid #6541f2' : '1.5px solid #868E96'};
    border-radius: 50%;
    background-color: ${({ $isSelected }) =>
      $isSelected ? '#F0ECFE' : '#ffffff'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 3px;

    ${({ $isSelected }) =>
      $isSelected &&
      `
        &::after {
          content: '';
          width: 8px;
          height: 8px;
          background-color: #ffffff;
          border-radius: 50%;
        }
      `}
  }
`;

export const GenderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const GenderLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.0057em;
  margin-left: 8px;
`;

export const DatePickerContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const StyledGenderSelect = styled.select<{ width: string }>`
  width: ${({ width }) => width};
  height: 34px;
  border: 1px solid #f0ecfe;
  border-radius: 8px;
  padding: 0 12px;
  font-size: 14px;
  color: #868e96;
  appearance: none;
  background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgOCA0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xIDBMNCAzTCA3IDBIMyIgZmlsbD0iI0E2QjhCOCIvPjwvc3ZnPg==')
    no-repeat right 12px center;
  background-size: 8px 4px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #6541f2;
  }
`;

export const SpecWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SpecText = styled.span`
  font-size: 17px;
  font-weight: 700;
  line-height: 24px;
`;

export const SpecInputWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const SpecInput = styled.input`
  width: 99px;
  height: 34px;
  border: 1px solid #f3e9f3;
  border-radius: 8px;
  font-size: 14px;
  background-color: #ffffff;
  text-align: center;
  text-decoration: left;
  padding: 0.5rem;
  &::placeholder {
    color: #8e8e8e;
    text-align: center;
  }

  &:focus {
    outline: none;
    border-color: #000000;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 세로 방향 */
    width: 251px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    /* 태블릿 가로 방향 */
    width: 251px;
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 471px;
  }
`;
export const SpecDateInput = styled.input`
  width: 49px;
  height: 34px;
  border: 1px solid #e2d6f7;
  border-radius: 8px;
  font-size: 14px;
  color: #868e96;
  text-align: center;
  @media (min-width: 768px) and (max-width: 991px) {
    /* 태블릿 세로 방향 */
    width: 57px;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    /* 태블릿 가로 방향 */
    width: 57px;
  }

  @media (min-width: 1200px) {
    /* 데스크톱 */
    width: 57px;
  }
`;

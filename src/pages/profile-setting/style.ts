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
  margin-top: 0.75rem;
  justify-content: center;
`;

export const ErrorMessage = styled.span`
  font-size: 0.75rem;
  margin-top: 0.25rem;
  color: #ff0000;
  padding: 0.5rem;
`;

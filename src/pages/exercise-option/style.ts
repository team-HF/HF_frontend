import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22.5rem;
  margin-top: 0.6875rem;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`;

export const SelectorContainer = styled.div`
  margin-bottom: 2.25rem;
`;
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 3.125rem;
`;
export const StyleH1 = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.625rem;
  color: #000000;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  max-width: 25.375rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  background: #00000033;
  z-index: 1000;
`;

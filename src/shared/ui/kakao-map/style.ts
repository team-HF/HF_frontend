import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  width: 80%;
  height: 70%;
  margin: 50px auto;
  background: #000000;
  position: relative;
  padding: 10px;
`;

export const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 40px);
  background-color: #eee;
  margin-top: 8px;
`;

export const XButton = styled.div`
  background-color: #000000;
  width: 16px;
  height: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  align-self: center;
  text-align: center;
`;

export const StyleX = styled.p`
  color: #ffffff;
  width: 100%;
`;
export const ZoomControl = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 36px;
  height: 80px;
  background: #f5f5f5;
  border-radius: 5px;
  border: 1px solid #919191;
  overflow: hidden;
  z-index: 10;
  box-sizing: border-box;
`;

export const ZoomIconWrapper = styled.span`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  border-bottom: 1px solid black;

  &:last-child {
    border-bottom: none;
  }
`;

export const ZoomIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const SearchBar = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 10;
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 4px;
  padding: 4px;
`;

export const SearchInput = styled.input`
  width: 120px;
  height: 24px;
  margin-right: 4px;
  padding: 2px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  height: 28px;
  background: #666;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

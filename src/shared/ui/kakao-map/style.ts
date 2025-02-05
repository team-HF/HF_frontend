import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 999;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  width: 360px;
  height: 80%;
  margin: 50px auto;
  z-index: 1000;
  background: #000;
  padding: 10px;
  position: relative;
  @media (min-width: 768px) {
    width: 40rem;
  }
  @media (min-width: 1200px) {
    width: 67.5rem;
  }
`;
export const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MapText = styled.div`
  font-size: 16px;
  color: #fff;
  flex: 1;
  text-align: center;
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
  position: absolute;
  left: 10px;
`;

export const StyleX = styled.img`
  width: 14px;
`;
export const ZoomControl = styled.div`
  position: absolute;
  top: 40px;
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
  width: 100%;
  left: 8px;
  z-index: 10;
  display: flex;
  align-items: center;
  margin-left: -8px;
  background: #333;
  padding: 4px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 24px;
  margin-right: 4px;
  padding: 2px 8px;
  background-color: #333;
  border-radius: 4px;
  color: #fff;
  outline: none;
  position: relative;
`;

export const SearchButton = styled.button`
  height: 24px;
  background: #666;
  color: #fff;
  border: none;
  white-space: nowrap;
  border-radius: 4px;
  padding: 2px;
  cursor: pointer;
`;

export const CircleButton = styled.button`
  position: absolute;
  right: 40px;
  width: 16px;
  height: 16px;
  background-color: #999;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
`;

export const XIcon = styled.div`
  color: #000;
  font-size: 14px;
  margin-bottom: 2px;
`;

export const ResultsHeaderWrapper = styled.div`
  width: 100%;
  background-color: #1a1a1a;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
`;
export const ResultHeaderText = styled.span`
  font-size: 14px;
  color: #fff;
`;
export const ResultHeaderSVG = styled.img`
  width: 14px;
  height: 14px;
`;
export const ResultsContainer = styled.div<{ $viewList: boolean }>`
  max-height: 200px;
  width: ${({ $viewList }) => ($viewList ? '100%' : 'calc(100% - 20px)')};
  overflow-y: auto;
  background-color: #000;
  z-index: 10003;
  position: relative;
  bottom: ${($viewList) => ($viewList ? '110px' : 0)};
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PlaceWrapper = styled.ul``;
export const PlaceName = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
`;

export const PlaceAddress = styled.div`
  font-size: 12px;
  color: grey;
  cursor: pointer;
`;

import { useState } from 'react';
import * as S from './style';

export default function Dropdown() {
  const dropdownData = ['5개', '10개', '15개', '20개'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(dropdownData[1]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <S.DropdownContainer isOpen={isOpen}>
      <S.SelectedItem onClick={toggleDropdown}>
        {selectedItem}
        <S.ArrowWrapper>
          <S.ArrowIcon isOpen={isOpen}>▼</S.ArrowIcon>
        </S.ArrowWrapper>
      </S.SelectedItem>
      <S.DropdownList isOpen={isOpen}>
        {dropdownData.map((item, index) => (
          <S.DropdownItem key={index} onClick={() => handleItemClick(item)}>
            {item}
          </S.DropdownItem>
        ))}
      </S.DropdownList>
    </S.DropdownContainer>
  );
}

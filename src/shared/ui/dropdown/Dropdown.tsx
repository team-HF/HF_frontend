import { useState } from 'react';
import * as s from './style';

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
    <s.DropdownContainer isOpen={isOpen}>
      <s.SelectedItem onClick={toggleDropdown}>
        {selectedItem}
        <s.ArrowWrapper>
          <s.ArrowIcon isOpen={isOpen}>▼</s.ArrowIcon>
        </s.ArrowWrapper>
      </s.SelectedItem>
      <s.DropdownList isOpen={isOpen}>
        {dropdownData.map((item, index) => (
          <s.DropdownItem key={index} onClick={() => handleItemClick(item)}>
            {item}
          </s.DropdownItem>
        ))}
      </s.DropdownList>
    </s.DropdownContainer>
  );
}

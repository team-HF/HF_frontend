import * as S from './chat-list-dropdown.style';

interface ChatListDropdownProps {
  setIsOpenModal: (value: boolean) => void;
  setActiveDropdown: (value: boolean | null) => void;
}

export default function ChatListDropdown({
  setIsOpenModal,
  setActiveDropdown,
}: ChatListDropdownProps) {
  const dropdownElement = ['알림 끄기', '채팅방 나가기'];
  const handleModal = (element: string) => {
    if (element === '채팅방 나가기') {
      setIsOpenModal(true);
      setActiveDropdown(null);
    }
  };
  return (
    <S.Dropdown>
      {dropdownElement.map((element, i) => (
        <S.DropdownItem onClick={() => handleModal(element)} key={i}>
          {element}
        </S.DropdownItem>
      ))}
    </S.Dropdown>
  );
}

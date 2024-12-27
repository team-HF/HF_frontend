import * as S from './chat-list-dropdown-style';

interface ChatListDropdownProps {
  setIsOpenModal: (value: boolean) => void;
}

export default function ChatListDropdown({
  setIsOpenModal,
}: ChatListDropdownProps) {
  const dropdownElement = ['알림 끄기', '채팅방 삭제'];
  const handleModal = (element: string) => {
    if (element === '채팅방 삭제') {
      setIsOpenModal(true);
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

import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { UseFormRegister, UseFormClearErrors } from 'react-hook-form';
import { User } from '../../types/user';

type GenderDropdownProps = {
  selectedGender: string;
  onGenderSelect: (gender: string) => void;
  register: UseFormRegister<User>;
  clearErrors: UseFormClearErrors<User>;
};

export default function GenderDropdown({
  selectedGender,
  onGenderSelect,
  register,
  clearErrors,
}: GenderDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleGenderSelect = (gender: string) => {
    onGenderSelect(gender);
    setIsOpen(false);
    setIsSelected(true);
    clearErrors('gender');
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  return (
    <S.Container>
      <S.DropdownHeader>
        <S.FieldText $isSelected={isSelected}>
          {selectedGender || '성별을 선택해주세요.'}
        </S.FieldText>
        <S.ArrowIcon
          src="/svg/under-arrow-icon.svg"
          alt="arrow-icon"
          onClick={toggleDropdown}
        />
      </S.DropdownHeader>
      {isOpen && (
        <S.DropdownList ref={dropdownRef}>
          <S.DropdownItem onClick={() => handleGenderSelect('남')}>
            남
          </S.DropdownItem>
          <S.DropdownItem onClick={() => handleGenderSelect('여')}>
            여
          </S.DropdownItem>
        </S.DropdownList>
      )}
      <input
        type="hidden"
        {...register('gender', { required: '성별을 선택해주세요.' })}
        value={selectedGender}
      />
    </S.Container>
  );
}

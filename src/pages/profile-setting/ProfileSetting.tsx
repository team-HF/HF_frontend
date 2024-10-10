import { useState } from 'react';
import * as S from './style';
import { useForm } from 'react-hook-form';
import Calendar from '../../shared/ui/calendar/Calendar';
import MediumButton from '../../shared/ui/medium-button/MediumButton';
import GenderDropdown from '../../shared/ui/gender-select-dropdown/GenderSelectDropdown';
import BackHeader from '../../shared/ui/back-header/BackHeader';

export default function ProfileSetting() {
  const {
    register,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm({ mode: 'onChange' });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedGender, setSelectedGender] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };
  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    setValue('gender', gender);
    clearErrors('gender');
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setValue('birth', date);
    clearErrors('birth');
  };

  return (
    <S.Container>
      <BackHeader text="프로필 입력" />
      <S.ProfileIconContainer>
        {imageFile ? (
          <S.ProfileUploadImage
            src={URL.createObjectURL(imageFile)}
            alt="profile-image"
          />
        ) : (
          <S.ProfileDefaultIcon />
        )}

        <S.ProfileChangeButton>
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleImageChange}
          />
          <S.ProfileChangeImage src="/svg/camera-icon.svg" alt="camera-icon" />
        </S.ProfileChangeButton>
      </S.ProfileIconContainer>
      <S.FieldContainer>
        <S.Field>
          <S.Label>닉네임</S.Label>
          <S.Input
            type="text"
            placeholder="영문, 숫자, 한글만 입력 가능합니다 (최대 8글자)"
            {...register('nickname', {
              required: '닉네임을 입력해주세요',
              pattern: {
                value: /^[a-zA-Z0-9가-힣]{1,8}$/,
                message: '닉네임은 영문,숫자,한글만 포함 가능합니다.',
              },
              maxLength: {
                value: 8,
                message: '닉네임의 길이는 8글자 이하 입니다.',
              },
            })}
            onBlur={() => clearErrors('nickname')}
          />
          {errors.nickname?.message &&
            typeof errors.nickname.message === 'string' && (
              <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
            )}
        </S.Field>

        <S.Field>
          <S.Label>생년 월일</S.Label>
          <Calendar selectedDate={selectedDate} onChange={handleDateChange} />
        </S.Field>

        <S.Field>
          <S.Label>성별</S.Label>
          <GenderDropdown
            selectedGender={selectedGender}
            onGenderSelect={handleGenderChange}
            register={register}
            clearErrors={clearErrors}
          />
        </S.Field>
        <S.Field>
          <S.Label>한줄 소개</S.Label>
          <S.Input
            type="text"
            placeholder="나를 소개할 한 줄을 작성해주세요."
            {...register('introduction', {
              required: {
                value: true,
                message: '한줄 소개를 입력해주세요.',
              },
            })}
            onBlur={() => clearErrors('introduction')}
          />
        </S.Field>
      </S.FieldContainer>
      <S.ButtonContainer>
        <MediumButton
          text="임시 버튼"
          color="black"
          backgroundColor="gray"
          border="1px solid black"
        />
      </S.ButtonContainer>
    </S.Container>
  );
}

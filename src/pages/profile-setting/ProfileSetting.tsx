import { useState } from 'react';
import * as S from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Calendar from '../../shared/ui/calendar/Calendar';
import GenderDropdown from '../../shared/ui/gender-select-dropdown/GenderSelectDropdown';
import BackHeader from '../../shared/ui/back-header/BackHeader';
import LargeButton from '../../shared/ui/large-button/LargeButton';
import { useProfileSettingStore } from '../../features/profile-setting/store/profile-setting-store';
import { useNavigate } from 'react-router-dom';
import { UserSchema } from '../../shared/schema/userSchema';
import { z } from 'zod';

type User = z.infer<typeof UserSchema>;
export default function ProfileSetting() {
  const {
    register,
    formState: { errors, isValid },
    setValue,
    clearErrors,
    handleSubmit,
  } = useForm<User>({ resolver: zodResolver(UserSchema), mode: 'onChange' });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [formattedBirthDate, setFormattedBirthDate] = useState<string>('');
  const [selectedGender, setSelectedGender] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const introduction = useProfileSettingStore((state) => state.introduction);
  const navigate = useNavigate();
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
    }
  };
  const handleProfileSettingNavigation = () => {
    navigate('/profile-setting/introduction');
  };
  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    setValue('gender', gender);
    clearErrors('gender');
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      setFormattedBirthDate(formattedDate);
      setValue('birth', formattedDate);
    } else {
      setFormattedBirthDate('');
      setValue('birth', '');
    }
    clearErrors('birth');
  };

  const onSubmit: SubmitHandler<User> = (data: User) => {
    const formData = new FormData();
    formData.append('nickname', data.nickname);
    formData.append('gender', data.gender);
    formData.append('introduction', data.introduction);
    if (imageFile) {
      formData.append('image', imageFile);
    }
    if (formattedBirthDate) {
      formData.append('birth', formattedBirthDate);
    }
  };

  return (
    <S.Container as="form" onSubmit={handleSubmit(onSubmit)}>
      <S.HeaderWrapper>
        <BackHeader text="프로필 입력" />
      </S.HeaderWrapper>
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
            {...register('image')}
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
            {...register('nickname')}
            onBlur={() => clearErrors('nickname')}
          />
          {errors.nickname?.message && (
            <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
          )}
        </S.Field>

        <S.Field>
          <S.Label>생년 월일</S.Label>
          <Calendar selectedDate={selectedDate} onChange={handleDateChange} />
          {errors.gender?.message && (
            <S.ErrorMessage>생년월일을 입력해주세요.</S.ErrorMessage>
          )}
        </S.Field>

        <S.Field>
          <S.Label>성별</S.Label>
          <GenderDropdown
            selectedGender={selectedGender}
            onGenderSelect={handleGenderChange}
            register={register}
            clearErrors={clearErrors}
          />
          {errors.gender?.message && (
            <S.ErrorMessage>{errors.gender.message}</S.ErrorMessage>
          )}
        </S.Field>

        <S.Field>
          <S.Label>한줄 소개</S.Label>
          <S.Input
            style={{ cursor: 'pointer' }}
            type="text"
            onClick={handleProfileSettingNavigation}
            value={introduction || ''}
            placeholder="나를 소개할 한 줄을 작성해주세요."
            {...register('introduction')}
            onBlur={() => clearErrors('introduction')}
          />
          {errors.introduction?.message && (
            <S.ErrorMessage>{errors.introduction.message}</S.ErrorMessage>
          )}
        </S.Field>

        <S.ButtonContainer>
          <LargeButton text="저장" type="submit" $isValid={isValid} />
        </S.ButtonContainer>
      </S.FieldContainer>
    </S.Container>
  );
}

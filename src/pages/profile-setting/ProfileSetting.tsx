import { useEffect, useState } from 'react';
import * as S from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import Calendar from '../../shared/ui/calendar/Calendar';
import GenderDropdown from '../../shared/ui/gender-select-dropdown/GenderSelectDropdown';
import BackHeader from '../../shared/ui/back-header/BackHeader';
import LargeButton from '../../shared/ui/large-button/LargeButton';
import { useProfileSettingStore } from '../../features/profile-setting/store/profile-setting-store';
import { useNavigate } from 'react-router-dom';
import { User } from '../../shared/types/user';

export default function ProfileSetting() {
  const {
    register,
    formState: { errors, isValid },
    setValue,
    clearErrors,
    handleSubmit,
  } = useForm<User>({
    mode: 'onChange',
    defaultValues: {
      nickname: '',
      birth: '',
      gender: '',
      introduction: '',
    },
  });

  const {
    nickname,
    birth,
    gender,
    introduction,
    image,
    setNickname,
    setBirth,
    setGender,
    setIntroduction,
    setImage,
  } = useProfileSettingStore();

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    birth ? new Date(birth) : null
  );
  const [formattedBirthDate, setFormattedBirthDate] = useState<string>(
    birth || ''
  );
  const [selectedGender, setSelectedGender] = useState(gender || '');
  const [imageFile, setImageFile] = useState<File | null>(image);
  const navigate = useNavigate();

  const saveDataToSessionStorage = (
    key: string,
    value: string | File | null
  ) => {
    if (value instanceof File) {
      sessionStorage.setItem(key, value.name);
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  };

  useEffect(() => {
    // 새로고침 시 세션 스토리지 비우기
    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // 세션에 필드 값 저장
    saveDataToSessionStorage('nickname', nickname);
  }, [nickname]);

  useEffect(() => {
    saveDataToSessionStorage('birth', birth);
  }, [birth]);

  useEffect(() => {
    saveDataToSessionStorage('gender', gender);
  }, [gender]);

  useEffect(() => {
    saveDataToSessionStorage('introduction', introduction);
  }, [introduction]);

  useEffect(() => {
    if (imageFile) {
      saveDataToSessionStorage('image', imageFile);
    }
  }, [imageFile]);

  // 마운트될 때 세션에서 값 로드
  useEffect(() => {
    const savedNickname = sessionStorage.getItem('nickname');
    if (savedNickname) {
      const parsedNickname = JSON.parse(savedNickname);
      setNickname(parsedNickname);
      setValue('nickname', parsedNickname);
    }

    const savedBirth = sessionStorage.getItem('birth');
    if (savedBirth) {
      const parsedBirth = JSON.parse(savedBirth);
      setBirth(parsedBirth);
      setFormattedBirthDate(parsedBirth);
      setSelectedDate(new Date(parsedBirth));
      setValue('birth', parsedBirth);
    }

    const savedGender = sessionStorage.getItem('gender');
    if (savedGender) {
      const parsedGender = JSON.parse(savedGender);
      setGender(parsedGender);
      setSelectedGender(parsedGender);
      setValue('gender', parsedGender);
    }

    const savedIntroduction = sessionStorage.getItem('introduction');
    if (savedIntroduction) {
      const parsedIntroduction = JSON.parse(savedIntroduction);
      setIntroduction(parsedIntroduction);
      setValue('introduction', parsedIntroduction);
    }

    const savedImage = sessionStorage.getItem('image');
    if (savedImage) {
      setImageFile(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = event.target.value;
    setNickname(newNickname);
    setValue('nickname', newNickname);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file instanceof File) {
        setImageFile(file);
        setImage(file);
      }
      console.log(file);
    }
  };

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
    setValue('gender', gender);
    setGender(gender);
    clearErrors('gender');
  };

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setSelectedDate(date);
      const formattedDate = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      setFormattedBirthDate(formattedDate);
      setValue('birth', formattedDate);
      setBirth(formattedDate);
    } else {
      setFormattedBirthDate('');
      setValue('birth', '');
      setBirth('');
    }
    clearErrors('birth');
  };

  const handleProfileSettingNavigation = () => {
    navigate('/profile-setting/introduction');
  };

  const onSubmit: SubmitHandler<User> = (data: User) => {
    setNickname(data.nickname);
    setGender(data.gender);
    setIntroduction(data.introduction);
    if (formattedBirthDate) {
      setBirth(formattedBirthDate);
    }
    if (imageFile) {
      setImage(imageFile);
    }
    const formData = new FormData();
    formData.append('nickname', data.nickname);
    formData.append('gender', data.gender);
    formData.append('introduction', data.introduction);
    formData.append('birth', formattedBirthDate);
    if (image) {
      formData.append('image', image);
    }
    for (const value of formData.values()) {
      console.log(value);
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
            src={
              imageFile instanceof File ? URL.createObjectURL(imageFile) : ''
            }
            alt="profile-image"
          />
        ) : (
          <S.ProfileDefaultIcon />
        )}

        <S.ProfileChangeButton>
          <input
            {...register('image')}
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
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
              required: '닉네임을 입력해주세요.',
              pattern: {
                value: /^[가-힣a-zA-Z0-9]{1,8}$/,
                message:
                  '영문, 숫자, 한글만 입력 가능하며 최대 8글자까지 가능합니다.',
              },
            })}
            onBlur={() => clearErrors('nickname')}
            value={nickname || ''}
            onChange={handleNicknameChange}
          />
          {errors.nickname?.message && (
            <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
          )}
        </S.Field>

        <S.Field>
          <S.Label>생년 월일</S.Label>
          <Calendar selectedDate={selectedDate} onChange={handleDateChange} />
          {errors.birth?.message && (
            <S.ErrorMessage>{errors.birth.message}</S.ErrorMessage>
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
            {...register('introduction', {
              required: '한줄 소개를 입력해주세요.',
            })}
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

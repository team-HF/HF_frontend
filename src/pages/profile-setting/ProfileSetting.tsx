import { useEffect, useState } from 'react';
import * as S from './style';
import { SubmitHandler, useForm } from 'react-hook-form';
import BackHeader from '../../shared/ui/back-header/BackHeader';
import LargeButton from '../../shared/ui/large-button/LargeButton';
import { useProfileSettingStore } from '../../features/profile-setting/store/profile-setting-store';
import { useNavigate } from 'react-router-dom';
import { User } from '../../shared/types/user';
import Select, { CSSObjectWithLabel, SingleValue } from 'react-select';

type OptionType = {
  value: number;
  label: string;
};

type SpecType = {
  title: string;
  location: string;
  startDate: string;
  endDate: string;
};

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
    specs,
    setNickname,
    setBirth,
    setGender,
    setIntroduction,
    setImage,
    setSpecs,
  } = useProfileSettingStore();

  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedDay, setSelectedDay] = useState('');

  const [specList, setSpecList] = useState<SpecType[]>(
    Array.isArray(specs) ? specs : []
  );

  const years: OptionType[] = Array.from(
    { length: currentYear - 1940 + 1 },
    (_, i) => ({ value: 1940 + i, label: `${1940 + i}년` })
  );
  const months: OptionType[] = Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}월`,
  }));

  const getDaysInMonth = (year: number, month: number) => {
    if (month === 2) {
      // 2월 처리 (윤년 계산)
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    }
    // 4, 6, 9, 11월은 30일, 나머지는 31일
    return [4, 6, 9, 11].includes(month) ? 30 : 31;
  };
  const days: OptionType[] =
    selectedYear && selectedMonth
      ? Array.from(
          {
            length: getDaysInMonth(Number(selectedYear), Number(selectedMonth)),
          },
          (_, i) => ({ value: i + 1, label: `${i + 1}일` })
        )
      : [];

  const handleYearChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedYear(selectedOption ? selectedOption.value.toString() : '');
  };

  const handleMonthChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedMonth(selectedOption ? selectedOption.value.toString() : '');
  };

  const handleDayChange = (selectedOption: SingleValue<OptionType>) => {
    setSelectedDay(selectedOption ? selectedOption.value.toString() : '');
  };

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
    // 새로고침 시 세션 비우기
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
    if (gender !== null && gender !== undefined) {
      sessionStorage.setItem('gender', JSON.stringify(gender));
    }
  }, [gender]);

  useEffect(() => {
    saveDataToSessionStorage('introduction', introduction);
  }, [introduction]);

  useEffect(() => {
    if (specList) {
      sessionStorage.setItem('specList', JSON.stringify(specList));
      setSpecList(specList);
    }
  }, [specList]);

  // 마운트될 때 세션에서 필드값들 로드
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
      //날짜 유효성 검사 값이 있을 때만 값 저장
      if (!isNaN(Date.parse(parsedBirth))) {
        setBirth(parsedBirth);
        setValue('birth', parsedBirth);
        const birthDate = new Date(parsedBirth);
        setSelectedYear(birthDate.getFullYear().toString());
        setSelectedMonth((birthDate.getMonth() + 1).toString());
        setSelectedDay(birthDate.getDate().toString());
      }
    }

    const savedGender = sessionStorage.getItem('gender');
    if (savedGender) {
      const parsedGender = JSON.parse(savedGender);
      setGender(parsedGender);
      setValue('gender', parsedGender);
    }

    const savedIntroduction = sessionStorage.getItem('introduction');
    if (savedIntroduction) {
      const parsedIntroduction = JSON.parse(savedIntroduction);
      setIntroduction(parsedIntroduction);
      setValue('introduction', parsedIntroduction);
    }
    const savedSpecList = sessionStorage.getItem('specList');
    if (savedSpecList) {
      const parsedSpecList = JSON.parse(savedSpecList);
      setSpecList(parsedSpecList);
      setSpecs(parsedSpecList);
    }
  }, [setNickname, setValue, setBirth, setGender, setIntroduction, setSpecs]);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = event.target.value;
    setNickname(newNickname);
    setValue('nickname', newNickname);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
    }
  };

  const handleDateChange = () => {
    if (selectedYear && selectedMonth && selectedDay) {
      const formattedDate = `${selectedYear}-${String(selectedMonth).padStart(
        2,
        '0'
      )}-${String(selectedDay).padStart(2, '0')}`;
      setValue('birth', formattedDate);
      setBirth(formattedDate);
    } else {
      setValue('birth', '');
      setBirth('');
    }
    clearErrors('birth');
  };

  useEffect(() => {
    handleDateChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear, selectedMonth, selectedDay]);

  const handleProfileSettingNavigation = () => {
    navigate('/profile-setting/introduction');
  };

  const handleAddSpec = () => {
    setSpecList((prevSpecList) => [
      ...prevSpecList,
      { title: '', location: '', startDate: '', endDate: '' },
    ]);
  };

  const handleSpecChange = (
    index: number,
    field: keyof SpecType,
    value: string
  ) => {
    setSpecList((prevSpecList) => {
      const updatedSpecList = [...prevSpecList];
      updatedSpecList[index][field] = value;
      return updatedSpecList;
    });
  };

  const onSubmit: SubmitHandler<User> = (data: User) => {
    setNickname(data.nickname);
    setGender(data.gender);
    setIntroduction(data.introduction);
    setBirth(data.birth);
    if (image) {
      setImage(image);
    }
    if (specs) {
      setSpecs(specs);
    }
    const formData = new FormData();
    formData.append('nickname', data.nickname);
    formData.append('gender', data.gender);
    formData.append('introduction', data.introduction);
    formData.append('birth', data.birth);
    if (image) {
      formData.append('image', image);
    }
    specList.forEach((spec, index) => {
      formData.append(`specs[${index}][title]`, spec.title);
      formData.append(`specs[${index}][location]`, spec.location);
      formData.append(`specs[${index}][startDate]`, spec.startDate);
      formData.append(`specs[${index}][endDate]`, spec.endDate);
    });
    for (const value of formData.values()) {
      console.log(value);
    }
  };

  //react-select 스타일 , styled-component로 하니 에러가 나서 컴포넌트에서 직접 정의
  const selectStyles = {
    container: (base: CSSObjectWithLabel) => ({
      ...base,
      width: '100px',
    }),
    control: (base: CSSObjectWithLabel) => ({
      ...base,
      fontSize: '12px',
    }),
    valueContainer: (base: CSSObjectWithLabel) => ({
      ...base,
      padding: '2px 8px',
    }),
    option: (base: CSSObjectWithLabel) => ({
      ...base,
      fontSize: '12px',
    }),
    indicatorSeparator: (base: CSSObjectWithLabel) => ({
      ...base,
      display: 'none',
    }),
  };
  return (
    <S.Container as="form" onSubmit={handleSubmit(onSubmit)}>
      <S.HeaderWrapper>
        <BackHeader text="프로필 입력" />
      </S.HeaderWrapper>
      <S.ProfileIconContainer>
        {image ? (
          <S.ProfileUploadImage
            src={image instanceof File ? URL.createObjectURL(image) : ''}
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
          <S.DatePickerContainer>
            <Select
              options={years}
              placeholder="년도"
              onChange={(option) => {
                handleYearChange(option);
                clearErrors('birth');
              }}
              styles={selectStyles}
              value={
                selectedYear
                  ? years.find(
                      (option) => option.value.toString() === selectedYear
                    )
                  : null
              }
            />
            <Select
              options={months}
              placeholder="월"
              onChange={(option) => {
                handleMonthChange(option);
                clearErrors('birth');
              }}
              styles={selectStyles}
              value={
                selectedMonth
                  ? months.find(
                      (option) => option.value.toString() === selectedMonth
                    )
                  : null
              }
            />
            <Select
              options={days}
              placeholder="일"
              onChange={(option) => {
                handleDayChange(option);
                clearErrors('birth');
              }}
              styles={selectStyles}
              isDisabled={!selectedYear || !selectedMonth}
              value={
                selectedDay
                  ? days.find(
                      (option) => option.value.toString() === selectedDay
                    )
                  : null
              }
            />
          </S.DatePickerContainer>
          <input
            {...register('birth', {
              required: '생년월일을 선택해주세요.',
              validate: () => {
                if (!selectedYear || !selectedMonth || !selectedDay) {
                  return '생년월일을 모두 선택해주세요.';
                }
                return true;
              },
            })}
            type="hidden"
          />
          {errors.birth?.message && (
            <S.ErrorMessage>{errors.birth.message}</S.ErrorMessage>
          )}
        </S.Field>

        <S.Field>
          <S.Label>성별</S.Label>
          <S.GenderWrapper>
            <S.StyledRadio
              type="radio"
              value="남"
              id="male"
              {...register('gender', {
                required: '성별을 선택해주세요.',
              })}
              checked={gender === '남'}
              onChange={() => {
                setGender('남');
                setValue('gender', '남', { shouldValidate: true });
              }}
            />
            <S.CustomRadio htmlFor="male" $isSelected={gender === '남'}>
              <S.GenderLabel>남</S.GenderLabel>
            </S.CustomRadio>

            <S.StyledRadio
              type="radio"
              value="여"
              id="female"
              {...register('gender', {
                required: '성별을 선택해주세요.',
              })}
              checked={gender === '여'}
              onChange={() => {
                setGender('여');
                setValue('gender', '여', { shouldValidate: true });
              }}
            />
            <S.CustomRadio htmlFor="female" $isSelected={gender === '여'}>
              <S.GenderLabel>여</S.GenderLabel>
            </S.CustomRadio>
          </S.GenderWrapper>
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
        <S.SpecWrapper>
          <S.SpecText>경력 및 수상사항</S.SpecText>
          <button
            style={{ display: 'flex', width: '20px' }}
            type="button"
            onClick={handleAddSpec}
          >
            +
          </button>
          {specList.map((spec, index) => (
            <S.SpecInputWrapper key={index}>
              <S.SpecInput
                type="text"
                placeholder="경력 및 수상명"
                value={spec.title}
                onChange={(e) =>
                  handleSpecChange(index, 'title', e.target.value)
                }
              />
              <S.SpecInput
                type="text"
                placeholder="과정 및 장소명"
                value={spec.location}
                onChange={(e) =>
                  handleSpecChange(index, 'location', e.target.value)
                }
              />
              <S.SpecDateInput
                type="text"
                placeholder="시작일"
                value={spec.startDate}
                onChange={(e) =>
                  handleSpecChange(index, 'startDate', e.target.value)
                }
              />
              <S.SpecDateInput
                type="text"
                placeholder="종료일"
                value={spec.endDate}
                onChange={(e) =>
                  handleSpecChange(index, 'endDate', e.target.value)
                }
              />
            </S.SpecInputWrapper>
          ))}
        </S.SpecWrapper>
        <S.ButtonContainer>
          <LargeButton text="저장" type="submit" $isValid={isValid} />
        </S.ButtonContainer>
      </S.FieldContainer>
    </S.Container>
  );
}

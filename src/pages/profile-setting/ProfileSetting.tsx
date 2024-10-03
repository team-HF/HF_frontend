import { useEffect, useState } from 'react';
import * as S from './style';
import { useForm } from 'react-hook-form';
import { usePhoneNumberFormatter } from '../../shared/utils/usePhoneNumberFormatter';
import Calendar from '../../shared/ui/calendar/Calendar';
import MediumButton from '../../shared/ui/medium-button/MediumButton';

export default function ProfileSetting() {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
    clearErrors,
  } = useForm({ mode: 'onChange' });
  const watchPhoneNumber = watch('phonenumber', '');
  const [formattedNumber, setFormattedNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const formatPhoneNumber = usePhoneNumberFormatter(watchPhoneNumber);

  // 전화번호를 입력할 때 마다 하이픈을 추가
  useEffect(() => {
    setFormattedNumber(formatPhoneNumber);
    setValue('phonenumber', formatPhoneNumber);
  }, [formatPhoneNumber, setValue]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setValue('birth', date);
    clearErrors('birth');
  };
  return (
    <S.Container>
      <S.TitleContainer>프로필 설정</S.TitleContainer>
      <S.ProfileIconContainer>
        <S.ProfileImage
          src="/svg/default-profile-icon.svg"
          alt="default-profile"
        />
        <S.ProfileChangeButton />
      </S.ProfileIconContainer>
      <S.FieldContainer>
        <S.Field>
          <S.Label>이름</S.Label>
          <S.Input
            type="text"
            {...register('name', {
              required: { value: true, message: '이름을 입력해주세요' },
              pattern: {
                value: /^[가-힣]{1,20}$/,
                message: '올바른 이름을 입력해주세요.',
              },
            })}
            onBlur={() => clearErrors('name')}
          />
          {errors.name?.message && typeof errors.name.message === 'string' && (
            <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>
          )}
        </S.Field>

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
          <S.Label>휴대폰 번호</S.Label>
          <S.Input
            type="text"
            value={formattedNumber}
            placeholder="-을 제외하고 입력해주세요"
            {...register('phonenumber', {
              required: '휴대폰 번호를 입력해주세요.',
              pattern: {
                value: /^01([0])-([0-9]{4})-([0-9]{4})$/,
                message: '번호 형식이 올바르지 않습니다',
              },
            })}
            onBlur={() => clearErrors('phonenumber')}
          />
          {errors.phonenumber?.message &&
            typeof errors.phonenumber?.message === 'string' && (
              <S.ErrorMessage>{errors.phonenumber.message}</S.ErrorMessage>
            )}
        </S.Field>

        <S.Field>
          <S.Label>생년 월일</S.Label>
          <Calendar selectedDate={selectedDate} onChange={handleDateChange} />
        </S.Field>

        <S.Field>
          <S.Label>한줄 소개</S.Label>
          <S.Input
            type="text"
            {...register('introduction', {
              required: {
                value: true,
                message: '한줄 소개를 입력해주세요.',
              },
            })}
            onBlur={() => clearErrors('introduction')}
          />
        </S.Field>

        <S.Field>
          <S.Label>운동 스타일 변경</S.Label>
          <S.Input />
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

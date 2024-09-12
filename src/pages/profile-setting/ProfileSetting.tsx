import { useEffect, useState } from 'react';
import Button from '../../shared/ui/button/Button';
import * as s from './styles';
import { useForm } from 'react-hook-form';

export default function ProfileSetting() {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
    clearErrors,
    trigger,
  } = useForm({ mode: 'onChange' });

  const watchPhoneNumber = watch('phonenumber', '');
  const [formattedNumber, setFormattedNumber] = useState('');

  //하이픈 추가 로직
  const formatHypenAddNumber = (value: string) => {
    const cleaned = value.replace(/[^0-9]/g, '');
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 7)
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(
      7,
      11
    )}`;
  };

  // 전화번호를 입력할 때 마다 하이픈을 추가
  useEffect(() => {
    const formatted = formatHypenAddNumber(watchPhoneNumber);
    setFormattedNumber(formatted);
    setValue('phonenumber', formatted);
    trigger('phonenumber');
  }, [watchPhoneNumber, setValue, trigger]);

  return (
    <s.Container>
      <s.TitleContainer>프로필 설정</s.TitleContainer>
      <s.ProfileIconContainer>
        <s.ProfileImage
          src="/svg/default-profile-icon.svg"
          alt="default-profile"
        />
        <s.ProfileChangeButton />
      </s.ProfileIconContainer>
      <s.FieldContainer>
        <s.Field>
          <s.Label>이름</s.Label>
          <s.Input
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
            <s.ErrorMessage>{errors.name.message}</s.ErrorMessage>
          )}
        </s.Field>

        <s.Field>
          <s.Label>닉네임</s.Label>
          <s.Input
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
              <s.ErrorMessage>{errors.nickname.message}</s.ErrorMessage>
            )}
        </s.Field>

        <s.Field>
          <s.Label>휴대폰 번호</s.Label>
          <s.Input
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
              <s.ErrorMessage>{errors.phonenumber.message}</s.ErrorMessage>
            )}
        </s.Field>

        <s.Field>
          <s.Label>내 정보</s.Label>
          <s.Input
            {...register('birth', {
              required: {
                value: true,
                message: '생년월일을 입력해주세요.',
              },
            })}
            onBlur={() => clearErrors('birth')}
          />
        </s.Field>

        <s.Field>
          <s.Label>한줄 소개</s.Label>
          <s.Input
            type="text"
            {...register('introduction', {
              required: {
                value: true,
                message: '한줄 소개를 입력해주세요.',
              },
            })}
            onBlur={() => clearErrors('introduction')}
          />
        </s.Field>

        <s.Field>
          <s.Label>운동 스타일 변경</s.Label>
          <s.Input />
        </s.Field>
      </s.FieldContainer>
      <s.ButtonContainer>
        <Button width="20.125rem" height="2.8125rem" color="main" text="저장" />
      </s.ButtonContainer>
    </s.Container>
  );
}

import { useEffect, useState } from 'react';
import * as S from './style';
import { useForm } from 'react-hook-form';
import SaveButton from '../../features/profile/button/SaveButton';
import { useProfileStore } from '../../features/profile/store/profile-store';

export default function Profile() {
  const {
    register,
    formState: { errors },
    clearErrors,
    setValue,
    watch,
  } = useForm({ mode: 'onChange' });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const {
    nickname,
    setNickname,
    birth,
    setBirth,
    sex,
    setSex,
    introduction,
    setIntroduction,
  } = useProfileStore();

  // 스토어 값이 변경될 때 폼에도 저장
  useEffect(() => {
    if (nickname) setValue('nickname', nickname);
    if (birth) setValue('birth', birth);
    if (sex) setValue('sex', sex);
    if (introduction) setValue('introduction', introduction);
  }, [nickname, birth, sex, introduction, setValue]);

  // 필드 watch로 감시하여 값들을 확인
  const watchedNickname = watch('nickname');
  const watchedBirth = watch('birth');
  const watchedSex = watch('sex');
  const watchedIntroduction = watch('introduction');

  // 전부 입력 되었을때만 버튼 활성화
  const isAllSelected =
    watchedNickname && watchedBirth && watchedSex && watchedIntroduction;

  const handleArrowClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // 성별 드롭다운 이벤트
  const handleSelect = (value: string) => {
    setSex(value);
    setValue('sex', value);
    setIsDropdownOpen(false);
    clearErrors('sex');
  };

  return (
    <S.Container>
      <S.ProfileContainer>
        <S.StyleH1>프로필 입력</S.StyleH1>
      </S.ProfileContainer>
      <S.ImageContainer>
        <S.ProfileImage src="/svg/camera-icon.svg" />
      </S.ImageContainer>
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
              onBlur: (e) => {
                setNickname(e.target.value); // store에 값 저장
                clearErrors('nickname');
              },
            })}
          />
          {errors.nickname?.message &&
            typeof errors.nickname.message === 'string' && (
              <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
            )}
        </S.Field>

        <S.Field>
          <S.Label>내 정보</S.Label>
          <S.Input
            placeholder="만 14세 미만은 법정 대리인 동의가 필요합니다."
            {...register('birth', {
              required: {
                value: true,
                message: '생년월일을 입력해주세요.',
              },
              onBlur: (e) => {
                setBirth(e.target.value);
                clearErrors('birth');
              },
            })}
          />
        </S.Field>

        <S.Field>
          <S.Label>성별</S.Label>
          <S.SexContainer>
            <S.Input
              placeholder="성별을 선택해주세요."
              {...register('sex', {
                required: {
                  value: true,
                  message: '성별을 선택해주세요.',
                },
              })}
              readOnly
            />
            <S.Arrow onClick={handleArrowClick}>{'\u25BC'}</S.Arrow>
            {isDropdownOpen && (
              <S.Dropdown>
                <S.DropdownItem onClick={() => handleSelect('남성')}>
                  남성
                </S.DropdownItem>
                <S.DropdownItem onClick={() => handleSelect('여성')}>
                  여성
                </S.DropdownItem>
              </S.Dropdown>
            )}
          </S.SexContainer>
          {errors.sex?.message && typeof errors.sex.message === 'string' && (
            <S.ErrorMessage>{errors.sex.message}</S.ErrorMessage>
          )}
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
              onBlur: (e) => {
                setIntroduction(e.target.value);
                clearErrors('introduction');
              },
            })}
          />
        </S.Field>
      </S.FieldContainer>
      <S.ButtonContainer>
        <SaveButton disabled={!isAllSelected} />
      </S.ButtonContainer>
    </S.Container>
  );
}

import * as S from './style';
import Header from '../../widgets/post-register/header/Header';
import PageForm from '../../shared/ui/page-form/PageForm';
import { useForm } from 'react-hook-form';
import { useProfileSettingStore } from '../../features/profile-setting/store/profile-setting-store';
import { useEffect, useState } from 'react';
import { getSgisLocationData } from '../../shared/api/getSgisLocationData';
import { getSgisApiAccessToken } from '../../shared/api/getSgisApiAccessToken';
import { useGetMyData } from '../../shared/api/useGetMyData';
import UpdateMyDataButton from '../../features/profile-setting/ui/UpdateMyDataButton';
import { useNavigate } from 'react-router-dom';
import {
  CompanionStyle,
  FitnessEagerness,
  FitnessKind,
  FitnessObjective,
  getCompanionStyleText,
  getFITNESS_OBJECTIVE_MAP,
  getFitnessEagernessText,
  getFitnessKindText,
} from '../../shared/constants/fitness-category';

interface ExerciseStyleState {
  companionStyle: string;
  fitnessEagerness: string;
  fitnessObjective: string;
  fitnessKind: string;
}
interface Location {
  addr_name: string;
  cd: string;
  full_addr: string;
  x_coor: string;
  y_coor: string;
}

export default function ProfileSetting() {
  const {
    register,
    formState: { errors },
    clearErrors,
    setValue,
    watch,
  } = useForm({ mode: 'onChange' });

  const {
    image,
    setImage,
    nickname,
    setNickname,
    cd1,
    setCd1,
    cd2,
    setCd2,
    cd3,
    setCd3,
    introduction,
    setIntroduction,
  } = useProfileSettingStore();

  const [userLocation, setUserLocation] = useState<string>('');
  const [locationData, setLocationData] = useState<Location[]>([]);
  const [introductionModal, setIntroductionModal] = useState<boolean>(false);
  const [introductionContent, setIntroductionContent] = useState<string>('');
  const [exerciseStyles, setExerciseStyles] = useState<ExerciseStyleState>({
    companionStyle: '',
    fitnessEagerness: '',
    fitnessObjective: '',
    fitnessKind: '',
  });

  const { data: myData, isLoading, isError } = useGetMyData();
  const navigate = useNavigate();

  useEffect(() => {
    const savedExerciseStyles = sessionStorage.getItem('exerciseStyles');
    if (savedExerciseStyles) {
      setExerciseStyles(JSON.parse(savedExerciseStyles));
    } else if (myData) {
      setExerciseStyles({
        companionStyle: myData.companionStyle || '',
        fitnessEagerness: myData.fitnessEagerness || '',
        fitnessObjective: myData.fitnessObjective || '',
        fitnessKind: myData.fitnessKind || '',
      });
    }
  }, [myData]);

  useEffect(() => {
    const clearSessionOnReload = () => {
      sessionStorage.removeItem('exerciseStyles');
    };
    window.addEventListener('beforeunload', clearSessionOnReload);

    return () => {
      window.removeEventListener('beforeunload', clearSessionOnReload);
    };
  }, []);

  const defaultExerciseStyle = [
    getCompanionStyleText(
      (exerciseStyles.companionStyle as CompanionStyle) ?? 'SMALL'
    ),
    getFitnessEagernessText(
      (exerciseStyles.fitnessEagerness as FitnessEagerness) ?? 'EAGER'
    ),
    getFITNESS_OBJECTIVE_MAP(
      (exerciseStyles.fitnessObjective as FitnessObjective) ?? 'BULK_UP'
    ),
    getFitnessKindText(
      (exerciseStyles.fitnessKind as FitnessKind) ?? 'HIGH_STRESS'
    ),
  ]
    .map((text) => `#${text}`)
    .join(', ');

  const getLocationData = async () => {
    const result = await getSgisLocationData(cd3 || cd2 || cd1);
    setLocationData(result);
  };

  useEffect(() => {
    getSgisApiAccessToken();
    getLocationData();
  }, [cd1, cd2, cd3]);

  const onClickLocationCard = (cd: string, full_addr: string) => {
    if (!cd1) setCd1(cd);
    else if (!cd2) setCd2(cd);
    else setCd3(cd);
    setUserLocation(full_addr);
  };

  const onClickReset = () => {
    setCd1('');
    setCd2('');
    setCd3('');
    setUserLocation('');
  };

  const handleExerciseStyleEdit = () => {
    navigate('/profile-setting/exercise-style', {
      state: {
        isEditMode: true,
        initialValues: exerciseStyles,
      },
    });
  };

  useEffect(() => {
    if (nickname) setValue('nickname', nickname);
    if (introduction) setValue('introduction', introduction);
  }, [nickname, cd1, cd2, cd3, introduction, setValue]);

  const watchedNickname = watch('nickname');
  const watchedIntroduction = watch('introduction');
  const isAllSelected = Boolean(
    watchedNickname && cd1 && cd2 && cd3 && watchedIntroduction
  );

  const getFullAddress = async () => {
    try {
      let fullAddress = '';
      if (cd1) {
        const response1 = await getSgisLocationData(cd1);
        if (response1?.length > 0) fullAddress = response1[0].full_addr;
      }
      if (cd2) {
        const response2 = await getSgisLocationData(cd2);
        if (response2?.length > 0) fullAddress += ` ${response2[0].full_addr}`;
      }
      if (cd3) {
        const response3 = await getSgisLocationData(cd3);
        if (response3?.length > 0) fullAddress += ` ${response3[0].full_addr}`;
      }
      setUserLocation(fullAddress.trim());
    } catch (error) {
      console.error('주소 불러오기 실패:', error);
    }
  };

  useEffect(() => {
    if (myData) {
      getFullAddress();
    }
  }, [myData]);

  const locationCards = locationData.map((data) => (
    <S.LocationCard
      key={`locationBtn_cd${data.cd}`}
      onClick={() => onClickLocationCard(data.cd, data.full_addr)}
    >
      {data.full_addr}
    </S.LocationCard>
  ));

  const storeIntroduction = () => {
    setIntroduction(introductionContent);
    setIntroductionModal(false);
  };

  useEffect(() => {
    if (introductionModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [introductionModal]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <PageForm isGNB={false}>
      <S.Container>
        <Header title={'프로필 입력'} />
        <S.ImageContainer>
          {image ? (
            <S.ProfileImageLabel
              htmlFor="profile_image_input"
              className="is_profile_image"
            >
              <S.ProfileImage
                src={URL.createObjectURL(image)}
                alt="uploaded_user_image"
              />
              <S.CameraIcon src="/svg/camera-icon.svg" />
            </S.ProfileImageLabel>
          ) : (
            <S.ProfileImageLabel htmlFor="profile_image_input">
              <S.DefaultUserImage src={'/svg/default-profile-icon.svg'} />
              <S.CameraIcon src="/svg/camera-icon.svg" />
            </S.ProfileImageLabel>
          )}
          <S.ProfileImageInput
            type="file"
            id="profile_image_input"
            onChange={(e) => {
              if (e.target.files) {
                setImage(e.target.files[0]);
              }
            }}
          />
        </S.ImageContainer>
        <S.FieldContainer>
          <S.Field>
            <S.Label>닉네임</S.Label>
            <S.Input
              type="text"
              placeholder="닉네임"
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
                onBlur: () => {
                  clearErrors('nickname');
                },
              })}
              onChange={(e) => {
                setNickname(e.target.value);
                setValue('nickname', e.target.value);
              }}
            />
            {errors.nickname?.message ? (
              typeof errors.nickname.message === 'string' && (
                <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
              )
            ) : (
              <S.PlaceHolder>
                닉네임은 최대 8자까지 입력 가능합니다.
              </S.PlaceHolder>
            )}
          </S.Field>
          <S.Field>
            <S.Label>운동 스타일</S.Label>
            <S.Input
              readOnly
              style={{ cursor: 'pointer' }}
              value={defaultExerciseStyle}
              onClick={handleExerciseStyleEdit}
            />
            <S.PlaceHolder>나를 소개할 한 줄을 작성해주세요.</S.PlaceHolder>
          </S.Field>
          <S.Field>
            <S.Label>현재 위치</S.Label>
            <S.LocationContainer>
              <S.Input value={userLocation} placeholder="현재 위치" disabled />
              <S.ResetBtn onClick={() => onClickReset()}>초기화</S.ResetBtn>
            </S.LocationContainer>
            <S.LocationList>{locationCards}</S.LocationList>
          </S.Field>
          <S.Field>
            <S.Label>한줄 소개</S.Label>
            <S.IntroductionContent
              $filled={!!introduction}
              onClick={() => setIntroductionModal(true)}
            >
              {introduction ? introduction : '한줄 소개'}
            </S.IntroductionContent>
            <S.PlaceHolder>나를 소개할 한 줄을 작성해주세요.</S.PlaceHolder>
          </S.Field>
        </S.FieldContainer>
        <UpdateMyDataButton disabled={!isAllSelected} />
      </S.Container>
      {introductionModal && (
        <S.IntroductionModal>
          <S.Container>
            <S.Header>
              <img
                src={'/svg/left-arrow-icon.svg'}
                onClick={() => setIntroductionModal(false)}
              />
            </S.Header>
            <S.InputContainer>
              <S.IntroductionInput
                placeholder="나를 소개할 한줄을 작성해주세요."
                {...register('introduction', {
                  required: '한줄 소개를 작성해주세요.',
                  maxLength: {
                    value: 500,
                    message: '최대 500자까지 작성할 수 있어요.',
                  },
                  onBlur: () => {
                    clearErrors('introduction');
                  },
                })}
                maxLength={500}
                onChange={(e) => setIntroductionContent(e.target.value)}
                value={introductionContent}
              />
              <S.LengthChecker>{`${introductionContent.length}/500`}</S.LengthChecker>
            </S.InputContainer>
            <S.StoreBtn onClick={storeIntroduction}>저장하기</S.StoreBtn>
          </S.Container>
        </S.IntroductionModal>
      )}
    </PageForm>
  );
}

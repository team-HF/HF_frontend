import * as S from './style';
import Header from '../../widgets/post-register/header/Header';
import PageForm from '../../shared/ui/page-form/PageForm';
import { useForm } from 'react-hook-form';
import { useProfileStore } from '../../features/profile/store/profile-store';
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

interface Location {
  addr_name: string;
  cd: string;
  full_addr: string;
  x_coor: string;
  y_coor: string;
}

export default function Profile() {
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
  } = useProfileStore();
  const [userLocation, setUserLocation] = useState<string>('');
  const [locationData, setLocationData] = useState<Location[]>([]);
  const [introductionModal, setIntroductionModal] = useState<boolean>(false);
  const [introductionContent, setIntroductionContent] = useState<string>('');

  const { data: myData, isLoading, isError } = useGetMyData();
  //운동 스타일 필드 기본 값 불러 오기 및 한글 이름 매핑
  const defaultExerciseStyle = [
    getCompanionStyleText(
      (myData?.companionStyle as CompanionStyle) ?? 'SMALL'
    ),
    getFitnessEagernessText(
      (myData?.fitnessEagerness as FitnessEagerness) ?? 'EAGER'
    ),
    getFITNESS_OBJECTIVE_MAP(
      (myData?.fitnessObjective as FitnessObjective) ?? 'BULK_UP'
    ),
    getFitnessKindText((myData?.fitnessKind as FitnessKind) ?? 'HIGH_STRESS'),
  ]
    .map((text) => `#${text}`)
    .join(', ');

  const [initialLocation, setInitialLocation] = useState('');
  const navigate = useNavigate();
  const getLocationData = async () => {
    const result = await getSgisLocationData(cd3 || cd2 || cd1);
    setLocationData(result);
  };

  useEffect(() => {
    getSgisApiAccessToken();
    getLocationData();
    // eslint-disable-next-line
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
        initialValues: {
          companionStyle: myData?.companionStyle,
          fitnessEagerness: myData?.fitnessEagerness,
          fitnessObjective: myData?.fitnessObjective,
          fitnessKind: myData?.fitnessKind,
        },
      },
    });
  };

  // 스토어 값이 변경될 때 폼에도 저장
  useEffect(() => {
    if (nickname) setValue('nickname', nickname);
    if (introduction) setValue('introduction', introduction);
  }, [nickname, cd1, cd2, cd3, introduction, setValue]);

  // 필드 watch로 감시하여 값들을 확인
  const watchedNickname = watch('nickname');
  const watchedIntroduction = watch('introduction');
  // 전부 입력 되었을때만 버튼 활성화
  const isAllSelected = Boolean(
    watchedNickname && cd1 && cd2 && cd3 && watchedIntroduction
  );
  console.log(myData);
  const getFullAddress = async () => {
    try {
      // cd3 > cd2 > cd1 순서로 주소를 가져옵니다.
      const code = myData?.cd3 || myData?.cd2 || myData?.cd1;

      if (code) {
        const response = await getSgisLocationData(code);
        if (response && response.length > 0) {
          setUserLocation(response[0].full_addr);
          setInitialLocation(response[0].full_addr);
        } else {
          console.error('API 응답에 주소 데이터가 없습니다.');
        }
      }
    } catch (error) {
      console.error('주소 불러오기 실패:', error);
    }
  };
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
  console.log(initialLocation, userLocation);

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
  useEffect(() => {
    if (myData) {
      setCd1(myData.cd1);
      setCd2(myData.cd2);
      setCd3(myData.cd3);
      setNickname(myData.nickname);
      setIntroduction(myData.introduction);
      getFullAddress();
    }
    // eslint-disable-next-line
  }, [myData]);
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
              defaultValue={myData?.nickname}
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
              defaultValue={defaultExerciseStyle}
              onClick={handleExerciseStyleEdit}
            />
            <S.PlaceHolder>나를 소개할 한 줄을 작성해주세요.</S.PlaceHolder>
          </S.Field>

          <S.Field>
            <S.Label>현재 위치</S.Label>
            <S.LocationContainer>
              <S.Input
                value={userLocation || initialLocation}
                placeholder="현재 위치"
                disabled
              />
              <S.ResetBtn onClick={() => onClickReset()}>초기화</S.ResetBtn>
            </S.LocationContainer>
            <S.LocationList>{locationCards}</S.LocationList>
          </S.Field>

          <S.Field>
            <S.Label>한줄 소개</S.Label>
            <S.IntroductionContent
              $filled={!!introduction}
              onClick={() => setIntroductionModal(true)}
              defaultValue={myData?.introduction}
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

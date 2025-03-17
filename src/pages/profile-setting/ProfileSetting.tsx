import * as S from './style';
import PageForm from '../../shared/ui/page-form/PageForm';
import { useForm } from 'react-hook-form';
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
import DuplicateNicknameButton from '../../features/profile-setting/ui/DuplicateNicknameButton';
import { getSgisLocation } from '../../shared/api/getSgisLocation';
import NewHeader from '../../shared/ui/new-header/NewHeader';
import { useProfileEditStore } from '../../features/profile-setting/store/profile-edit-store';
import { useResetProfileEditStoreOnExit } from '../../features/my-page/hooks/ useResetProfileEditStoreOnExit';

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
  const { data: myData, isLoading, isError } = useGetMyData();
  const navigate = useNavigate();

  const [image, setImage] = useState<File>();
  const [locationData, setLocationData] = useState<Location[]>([]);
  const [introductionModal, setIntroductionModal] = useState<boolean>(false);
  const [introductionContent, setIntroductionContent] = useState<string>('');
  const [isNicknameValidated, setIsNicknameValidated] =
    useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const initialNicknameValidate = myData?.nickname === watch('nickname');
  const {
    nickname,
    setNickname,
    introduction,
    setIntroduction,
    cd1,
    setCd1,
    cd2,
    setCd2,
    cd3,
    setCd3,
    styleSelected,
    setStyleSelected,
    habitSelected,
    setHabitSelected,
    goalSelected,
    setGoalSelected,
    exerciseSelected,
    setExerciseSelected,
  } = useProfileEditStore();

  useEffect(() => {
    if (!myData) return;
    if (nickname === null) setNickname(myData.nickname);
    if (introduction === null) setIntroduction(myData.introduction);
    if (styleSelected === null)
      setStyleSelected(myData.companionStyle || 'SMALL');
    if (habitSelected === null)
      setHabitSelected(myData.fitnessEagerness || 'EAGER');
    if (goalSelected === null)
      setGoalSelected(myData.fitnessObjective || 'BULK_UP');
    if (exerciseSelected === null)
      setExerciseSelected(myData.fitnessKind || 'HIGH_STRESS');

    if (cd1 === null) setCd1(myData.cd1);
    if (cd2 === null) setCd2(myData.cd2);
    if (cd3 === null) setCd3(myData.cd3);

    const fetchLocation = async () => {
      await getSgisApiAccessToken();
      const result = await getSgisLocation(
        `${myData.cd1}${myData.cd2}`,
        `${myData.cd1}${myData.cd2}${myData.cd3}`
      );
      if (!selectedLocation) setSelectedLocation(result.full_addr);
    };

    fetchLocation();
  }, [myData]);

  const defaultExerciseStyle = [
    getCompanionStyleText(styleSelected as CompanionStyle),
    getFitnessEagernessText(habitSelected as FitnessEagerness),
    getFITNESS_OBJECTIVE_MAP(goalSelected as FitnessObjective),
    getFitnessKindText(exerciseSelected as FitnessKind),
  ]
    .map((text) => `#${text}`)
    .join(', ');

  const getLocationData = async () => {
    const result = await getSgisLocationData(cd3 || cd2 || cd1 || '');
    setLocationData(result);
  };

  useEffect(() => {
    getSgisApiAccessToken();
    getLocationData();
  }, [cd1, cd2, cd3]);

  const onClickLocationCard = (cd: string, full_addr: string) => {
    if (!cd1) {
      setCd1(cd);
    } else if (!cd2) {
      setCd2(cd);
    } else {
      setCd3(cd);
    }
    setSelectedLocation(full_addr);
  };

  const onClickReset = () => {
    setCd1(null);
    setCd2(null);
    setCd3(null);
    setSelectedLocation('');
  };

  const watchedNickname = watch('nickname');
  const isLocationValid = Boolean(cd1 && cd2 && cd3);
  const isAllSelected = Boolean(nickname && isLocationValid && introduction);

  const displayLocation =
    selectedLocation || [cd1, cd2, cd3].filter(Boolean).join(' ');

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

  const {
    onChange: nicknameOnChange,
    onBlur: nicknameOnBlur,
    name: nicknameName,
    ref: nicknameRef,
  } = register('nickname', {
    required: '닉네임을 입력해주세요',
    pattern: {
      value: /^[a-zA-Z0-9가-힣]{1,8}$/,
      message: '닉네임은 영문,숫자,한글만 포함 가능합니다.',
    },
  });

  const onClickBack = () => {
    navigate('/my-page');
  };

  useResetProfileEditStoreOnExit();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <PageForm isGNB={false}>
      <S.Container>
        <NewHeader title="프로필 입력" isBackBtn onClickBack={onClickBack} />
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
              <S.ProfileImage
                src={myData?.profileImageUrl || '/svg/default-profile-icon.svg'}
                alt="user_profile_image"
              />
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                whiteSpace: 'nowrap',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <S.Input
                type="text"
                placeholder="닉네임"
                maxLength={8}
                value={nickname || ''}
                name={nicknameName}
                ref={nicknameRef}
                onChange={(e) => {
                  nicknameOnChange(e);
                  setNickname(e.target.value);
                  setValue('nickname', e.target.value);
                  setIsNicknameValidated(false);
                }}
                onBlur={(e) => {
                  nicknameOnBlur(e);
                }}
              />
              <DuplicateNicknameButton
                nickname={nickname || ''}
                disabled={!!errors.nickname?.message}
                onSuccess={() => {
                  setIsNicknameValidated(true);
                }}
              />
            </div>
            {errors.nickname?.message ? (
              <S.ErrorMessage>{String(errors.nickname.message)}</S.ErrorMessage>
            ) : !initialNicknameValidate &&
              !isNicknameValidated &&
              watchedNickname ? (
              <S.ErrorMessage>닉네임 중복검사를 완료해주세요.</S.ErrorMessage>
            ) : null}
          </S.Field>
          <S.Field>
            <S.Label>운동 스타일</S.Label>
            <S.Input
              readOnly
              style={{ cursor: 'pointer' }}
              value={defaultExerciseStyle}
              onClick={() => {
                navigate('/profile-setting/exercise-style', {
                  state: { isEditMode: true },
                });
              }}
            />
            <S.PlaceHolder>나를 소개할 한 줄을 작성해주세요.</S.PlaceHolder>
          </S.Field>
          <S.Field>
            <S.Label>현재 위치</S.Label>
            <S.LocationContainer>
              <S.Input
                value={displayLocation}
                placeholder="현재 위치"
                disabled
              />
              <S.ResetBtn onClick={onClickReset}>초기화</S.ResetBtn>
            </S.LocationContainer>
            <S.LocationList>{locationCards}</S.LocationList>
          </S.Field>
          <S.Field>
            <S.Label>한줄 소개</S.Label>
            <S.IntroductionContent
              $filled={!!introduction}
              onClick={() => {
                setIntroductionContent(introduction || '');
                setIntroductionModal(true);
              }}
            >
              {introduction ? introduction : '한줄 소개를 입력해주세요.'}
            </S.IntroductionContent>
            <S.PlaceHolder>나를 소개할 한 줄을 작성해주세요.</S.PlaceHolder>
          </S.Field>
        </S.FieldContainer>
        <UpdateMyDataButton
          disabled={!isAllSelected}
          image={image}
          cd1={cd1 || ''}
          cd2={cd2 || ''}
          cd3={cd3 || ''}
          introduction={introduction!}
          styleSelected={styleSelected as 'SMALL' | 'GROUP'}
          habitSelected={habitSelected as 'EAGER' | 'LAZY'}
          goalSelected={goalSelected as 'BULK_UP' | 'RUNNING'}
          exerciseSelected={exerciseSelected as 'HIGH_STRESS' | 'FUNCTIONAL'}
        />
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

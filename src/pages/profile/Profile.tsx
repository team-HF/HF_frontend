import * as S from "./style";
import Header from "../../widgets/post-register/header/Header";
import PageForm from "../../shared/ui/page-form/PageForm";
import SaveButton from "../../features/profile/button/SaveButton";
import DatePicker from "../../widgets/profile/date-picker/DatePicker";
import { useForm } from "react-hook-form";
import { useProfileStore } from "../../features/profile/store/profile-store";
import { useEffect, useState } from "react";
import {
  dayData,
  monthData,
  yearData,
} from "../../entities/profile/date-picker-data";
import { useNavigate } from "react-router-dom";
import LocationSelectBar from "../../shared/ui/location-select-bar/LocationSelectBar";
import { useLocationStore } from "../../shared/store/location-store";

export default function Profile() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    clearErrors,
    setValue,
    watch,
  } = useForm({ mode: "onChange" });

  const {
    image,
    setImage,
    nickname,
    setNickname,
    dateYear,
    setDateYear,
    dateMonth,
    setDateMonth,
    dateDay,
    setDateDay,
    gender,
    setGender,
    introduction,
    setIntroduction,
  } = useProfileStore();

  const { cd1, cd2, cd3 } = useLocationStore();

  const [introductionModal, setIntroductionModal] = useState<boolean>(false);
  const [introductionContent, setIntroductionContent] = useState<string>("");

  // 스토어 값이 변경될 때 폼에도 저장
  useEffect(() => {
    if (nickname) setValue("nickname", nickname);
    if (dateYear) setValue("birth", dateYear);
    if (gender) setValue("gender", gender);
    if (introduction) setValue("introduction", introduction);
  }, [
    nickname,
    dateYear,
    dateMonth,
    dateDay,
    gender,
    cd1,
    cd2,
    cd3,
    introduction,
    setValue,
  ]);

  // 필드 watch로 감시하여 값들을 확인
  const watchedNickname = watch("nickname");
  const watchedBirth = watch("birth");
  const watchedGender = watch("gender");
  const watchedIntroduction = watch("introduction");

  // 전부 입력 되었을때만 버튼 활성화
  const isAllSelected = Boolean(
    watchedNickname &&
      watchedBirth &&
      watchedGender &&
      cd1 &&
      cd2 &&
      cd3 &&
      watchedIntroduction
  );

  const storeIntroduction = () => {
    setIntroduction(introductionContent);
    setIntroductionModal(false);
  };

  useEffect(() => {
    if (introductionModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [introductionModal]);

  return (
    <PageForm isGNB={false}>
      <S.Container>
        <Header title={"프로필 입력"} navigate={() => navigate(-1)} />

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
              <S.DefaultUserImage src={"/svg/default-profile-icon.svg"} />
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
              {...register("nickname", {
                required: "닉네임을 입력해주세요",
                pattern: {
                  value: /^[a-zA-Z0-9가-힣]{1,8}$/,
                  message: "닉네임은 영문,숫자,한글만 포함 가능합니다.",
                },
                maxLength: {
                  value: 8,
                  message: "닉네임의 길이는 8글자 이하 입니다.",
                },
                onBlur: () => {
                  clearErrors("nickname");
                },
              })}
              onChange={(e) => setNickname(e.target.value)}
            />
            {errors.nickname?.message ? (
              typeof errors.nickname.message === "string" && (
                <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
              )
            ) : (
              <S.PlaceHolder>
                닉네임은 최대 8자까지 입력 가능합니다.
              </S.PlaceHolder>
            )}
          </S.Field>

          <S.Field>
            <S.Label>생년월일</S.Label>
            <S.DateContainer>
              <DatePicker
                date={dateYear}
                setDate={setDateYear}
                placeHolder="년도"
                optionData={yearData}
              />
              <DatePicker
                date={dateMonth}
                setDate={setDateMonth}
                placeHolder="월"
                optionData={monthData}
              />
              <DatePicker
                date={dateDay}
                setDate={setDateDay}
                placeHolder="일"
                optionData={dayData}
              />
            </S.DateContainer>
            <S.PlaceHolder>
              만 14세 미만은 법정 대리인 동의가 필요합니다.
            </S.PlaceHolder>
          </S.Field>

          <S.Field>
            <S.Label>성별</S.Label>
            <S.SexContainer>
              <S.genderBtn
                selected={gender === "MALE"}
                onClick={() => setGender("MALE")}
              >
                남자
              </S.genderBtn>
              <S.genderBtn
                selected={gender === "FEMALE"}
                onClick={() => setGender("FEMALE")}
              >
                여자
              </S.genderBtn>
            </S.SexContainer>
            {errors.gender?.message &&
              typeof errors.gender.message === "string" && (
                <S.ErrorMessage>{errors.gender.message}</S.ErrorMessage>
              )}
          </S.Field>

          <S.Field>
            <LocationSelectBar />
          </S.Field>

          <S.Field>
            <S.Label>한줄 소개</S.Label>
            <S.IntroductionContent
              $filled={Boolean(introduction)}
              onClick={() => setIntroductionModal(true)}
            >
              {introduction ? introduction : "한줄 소개"}
            </S.IntroductionContent>
            <S.PlaceHolder>나를 소개할 한 줄을 작성해주세요.</S.PlaceHolder>
          </S.Field>
        </S.FieldContainer>
        <SaveButton disabled={!isAllSelected} />
      </S.Container>

      {introductionModal && (
        <S.IntroductionModal>
          <S.Container>
            <S.Header>
              <img
                src={"/svg/left-arrow-icon.svg"}
                onClick={() => setIntroductionModal(false)}
              />
            </S.Header>
            <S.InputContainer>
              <S.IntroductionInput
                placeholder="나를 소개할 한줄을 작성해주세요."
                {...register("introduction", {
                  required: "한줄 소개를 작성해주세요.",
                  maxLength: {
                    value: 500,
                    message: "최대 500자까지 작성할 수 있어요.",
                  },
                  onBlur: () => {
                    clearErrors("introduction");
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

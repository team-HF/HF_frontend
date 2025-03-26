import * as S from "./style";
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
import NewHeader from "../../shared/ui/new-header/NewHeader";
import Cookies from "js-cookie";
import DuplicateNicknameButton from "../../features/profile-setting/ui/DuplicateNicknameButton";

export default function Profile() {
  const navigate = useNavigate();

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
  const [isNicknameValidated, setIsNicknameValidated] =
    useState<boolean>(false);

  const {
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const { name: nicknameName, onChange: nicknameOnChange } = register(
    "nickname",
    {
      required: "닉네임을 입력해주세요",
      pattern: {
        value: /^[a-zA-Z0-9가-힣]{1,8}$/,
        message: "닉네임은 영문, 숫자, 한글만 포함 가능합니다.",
      },
    }
  );

  const storeImageFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.size > 1024 * 1024) {
        alert(
          "이미지 파일의 용량이 너무 큽니다. 1MB 이하의 이미지를 업로드해주세요."
        );
        return;
      }
      setImage(e.target.files[0]);
    }
  };

  const storeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNicknameValidated) setIsNicknameValidated(false);
    nicknameOnChange(e);
    setNickname(e.target.value);
  };

  const storeIntroduction = () => {
    setIntroduction(introductionContent);
    setIntroductionModal(false);
  };

  const isAllSelected = Boolean(
    nickname &&
      isNicknameValidated &&
      dateYear &&
      dateMonth &&
      dateDay &&
      gender &&
      cd1 &&
      cd2 &&
      cd3 &&
      introduction
  );

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

  useEffect(() => {
    const isNewMember = Cookies.get("is_new_member");
    if (isNewMember !== "true") {
      navigate("/not-found");
    }
  }, []);

  return (
    <PageForm isGNB={false}>
      <S.Container>
        <NewHeader
          title="프로필 입력"
          isBackBtn={true}
          onClickBack={() => navigate(-1)}
        />

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
          <S.ProfileImageInput type="file" onChange={storeImageFile} />
        </S.ImageContainer>

        <S.FieldContainer>
          <S.Field>
            <S.Label>닉네임</S.Label>
            <S.LabelContainer>
              <S.Input
                type="text"
                placeholder="닉네임"
                maxLength={8}
                value={nickname}
                name={nicknameName}
                onChange={storeNickname}
              />
              <DuplicateNicknameButton
                nickname={nickname}
                disabled={!!errors.nickname?.message}
                onSuccess={() => setIsNicknameValidated(true)}
              />
            </S.LabelContainer>
            {errors.nickname?.message ? (
              <S.ErrorMessage>{String(errors.nickname.message)}</S.ErrorMessage>
            ) : nickname && !isNicknameValidated ? (
              <S.ErrorMessage>닉네임 중복검사를 완료해주세요.</S.ErrorMessage>
            ) : isNicknameValidated ? (
              <S.ErrorMessage className="valid">
                닉네임 중복검사 완료
              </S.ErrorMessage>
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
            <NewHeader
              isBackBtn={true}
              onClickBack={() => setIntroductionModal(false)}
            />
            <S.InputContainer>
              <S.IntroductionInput
                placeholder="나를 소개할 한줄을 작성해주세요."
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

import { useEffect, useState } from "react";
import * as S from "./style";
import { useForm } from "react-hook-form";
import SaveButton from "../../features/profile/button/SaveButton";
import { useProfileStore } from "../../features/profile/store/profile-store";
import { getSgisLocationData } from "../../shared/api/getSgisLocationData";
import { getSgisApiAccessToken } from "../../shared/api/getSgisApiAccessToken";

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
  } = useForm({ mode: "onChange" });

  const {
    image,
    setImage,
    nickname,
    setNickname,
    birth,
    setBirth,
    sex,
    cd1,
    setCd1,
    cd2,
    setCd2,
    cd3,
    setCd3,
    setSex,
    introduction,
    setIntroduction,
  } = useProfileStore();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userLocation, setUserLocation] = useState("");
  const [locationData, setLocationData] = useState<Location[]>([]);

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
    setCd1("");
    setCd2("");
    setCd3("");
    setUserLocation("");
  };

  // 스토어 값이 변경될 때 폼에도 저장
  useEffect(() => {
    if (nickname) setValue("nickname", nickname);
    if (birth) setValue("birth", birth);
    if (sex) setValue("sex", sex);
    if (introduction) setValue("introduction", introduction);
  }, [nickname, birth, sex, cd1, cd2, cd3, introduction, setValue]);

  // 필드 watch로 감시하여 값들을 확인
  const watchedNickname = watch("nickname");
  const watchedBirth = watch("birth");
  const watchedSex = watch("sex");
  const watchedIntroduction = watch("introduction");

  // 전부 입력 되었을때만 버튼 활성화
  const isAllSelected = Boolean(
    watchedNickname &&
      watchedBirth &&
      watchedSex &&
      cd1 &&
      cd2 &&
      cd3 &&
      watchedIntroduction
  );

  const handleArrowClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // 성별 드롭다운 이벤트
  const handleSelect = (value: string) => {
    setSex(value);
    setValue("sex", value);
    setIsDropdownOpen(false);
    clearErrors("sex");
  };
  return (
    <S.Container>
      <S.ProfileContainer>
        <S.StyleH1>프로필 입력</S.StyleH1>
      </S.ProfileContainer>

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
          </S.ProfileImageLabel>
        ) : (
          <S.ProfileImageLabel htmlFor="profile_image_input">
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
            placeholder="영문, 숫자, 한글만 입력 가능합니다 (최대 8글자)"
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
          {errors.nickname?.message &&
            typeof errors.nickname.message === "string" && (
              <S.ErrorMessage>{errors.nickname.message}</S.ErrorMessage>
            )}
        </S.Field>

        <S.Field>
          <S.Label>생년월일</S.Label>
          <S.Input
            type="date"
            placeholder="만 14세 미만은 법정 대리인 동의가 필요합니다."
            {...register("birth", {
              required: {
                value: true,
                message: "생년월일을 입력해주세요.",
              },
              onBlur: () => clearErrors("birth"),
            })}
            onChange={(e) => setBirth(e.target.value)}
          />
        </S.Field>

        <S.Field>
          <S.Label>성별</S.Label>
          <S.SexContainer>
            <S.Input
              placeholder="성별을 선택해주세요."
              {...register("sex", {
                required: {
                  value: true,
                  message: "성별을 선택해주세요.",
                },
              })}
              readOnly
            />
            <S.Arrow onClick={handleArrowClick}>{"\u25BC"}</S.Arrow>
            {isDropdownOpen && (
              <S.Dropdown>
                <S.DropdownItem onClick={() => handleSelect("남성")}>
                  남성
                </S.DropdownItem>
                <S.DropdownItem onClick={() => handleSelect("여성")}>
                  여성
                </S.DropdownItem>
              </S.Dropdown>
            )}
          </S.SexContainer>
          {errors.sex?.message && typeof errors.sex.message === "string" && (
            <S.ErrorMessage>{errors.sex.message}</S.ErrorMessage>
          )}
        </S.Field>

        <S.Field>
          <S.Label>위치</S.Label>
          <S.LocationContainer>
            <S.Input value={userLocation} disabled />
            <S.ResetBtn onClick={() => onClickReset()}>초기화</S.ResetBtn>
          </S.LocationContainer>
          <S.LocationList>
            {locationData.map((data) => (
              <S.LocationCard
                key={`locationBtn_cd${data.cd}`}
                onClick={() => onClickLocationCard(data.cd, data.full_addr)}
              >
                {data.full_addr}
              </S.LocationCard>
            ))}
          </S.LocationList>
        </S.Field>

        <S.Field>
          <S.Label>한줄 소개</S.Label>
          <S.Input
            type="text"
            placeholder="나를 소개할 한 줄을 작성해주세요."
            {...register("introduction", {
              required: {
                value: true,
                message: "한줄 소개를 입력해주세요.",
              },
              onBlur: () => clearErrors("introduction"),
            })}
            onChange={(e) => setIntroduction(e.target.value)}
          />
        </S.Field>
      </S.FieldContainer>
      <S.ButtonContainer>
        <SaveButton disabled={!isAllSelected} />
      </S.ButtonContainer>
    </S.Container>
  );
}

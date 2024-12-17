import * as S from "./style";

const ProfileImage = ({
  img_url,
  update,
}: {
  img_url: string;
  update: boolean;
}) => {
  return (
    <>
      <S.ProfileImage url={img_url} />
      {update ? (
        <S.Label htmlFor="input_image">
          <S.UploadImageBtn type="file" accept="image/*" id="input_image" />
        </S.Label>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfileImage;

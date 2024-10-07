import * as S from "./style";

const postData = {
  id: 1,
  category: "고민/사연",
  title: "대제목",
  displayName: "닉네임",
  timeStamp: "2024.01.11",
  content:
    "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 ",
  view: 12,
  heart: 12,
  comment: 12,
};

const PostContent = () => {
  
  return (
    <S.Container>
      <S.TagContainer>
        <S.PostTypeTag>{postData.category}</S.PostTypeTag>
      </S.TagContainer>
      <S.ContentContainer>
        <S.Title>{postData.title}</S.Title>
        <S.InfoBox_1>
          <S.InfoText>{postData.displayName}</S.InfoText>
          <S.InfoText>{postData.timeStamp}</S.InfoText>
        </S.InfoBox_1>
        <S.MainContent>{postData.content}</S.MainContent>
        <S.InfoBox_2>
          <S.IconBox>
            <S.InfoIcon src={"public/svg/view-icon.svg"} />
            <S.InfoText>{postData.view}</S.InfoText>
          </S.IconBox>
          <S.IconBox>
            <S.InfoIcon src={"public/svg/heart-icon.svg"} />
            <S.InfoText>{postData.heart}</S.InfoText>
          </S.IconBox>
          <S.IconBox>
            <S.InfoIcon src={"public/svg/comment-icon.svg"} />
            <S.InfoText>{postData.comment}</S.InfoText>
          </S.IconBox>
        </S.InfoBox_2>
      </S.ContentContainer>
    </S.Container>
  );
};

export default PostContent;

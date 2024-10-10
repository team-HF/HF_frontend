import * as S from "./style";
import { useGetDate } from "../../../shared/utils/useGetDate";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPostDetail from "./api/useGetPostDetail";

interface PostData {
  postId: number;
  category: string;
  writerId: number;
  title: string;
  content: string;
  creation_time: Date;
  view_count: number;
  like_count: number;
  comment_count: number;
}

const PostContent = () => {
  const { id } = useParams();
  const postId = Number(id);
  const [postData, setPostData] = useState<PostData | null>();
  useEffect(() => {
    (async () => {
      const response = await getPostDetail(postId);
      setPostData(response?.content);
    })();
  }, [postId]);
  return (
    <S.Container>
      <S.TagContainer>
        <S.PostTypeTag>{postData?.category}</S.PostTypeTag>
      </S.TagContainer>
      <S.ContentContainer>
        <S.Title>{postData?.title}</S.Title>
        <S.InfoBox_1>
          <S.InfoText>{postData?.writerId}</S.InfoText>
          <S.InfoText>{useGetDate(postData?.creation_time)}</S.InfoText>
        </S.InfoBox_1>
        <S.MainContent>{postData?.content}</S.MainContent>
        <S.InfoBox_2>
          <S.IconBox>
            <S.InfoIcon src={"/svg/view-icon.svg"} />
            <S.InfoText>{postData?.view_count}</S.InfoText>
          </S.IconBox>
          <S.IconBox>
            <S.InfoIcon src={"/svg/heart-icon.svg"} />
            <S.InfoText>{postData?.like_count}</S.InfoText>
          </S.IconBox>
          <S.IconBox>
            <S.InfoIcon src={"/svg/comment-icon.svg"} />
            <S.InfoText>{postData?.comment_count}</S.InfoText>
          </S.IconBox>
        </S.InfoBox_2>
      </S.ContentContainer>
    </S.Container>
  );
};

export default PostContent;

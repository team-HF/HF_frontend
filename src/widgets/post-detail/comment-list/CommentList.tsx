import * as S from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getComment from "./api/useGetComment";
import CommentCard from "../comment-card/CommentCard";

export interface Comment {
  commentId: number;
  postId: number;
  writerId: number;
  content: string;
  creationTime: string;
  lastModified: string;
}

const CommentList = () => {
  const { id } = useParams();
  const postId = Number(id);
  const [commentDataList, setCommentDataList] = useState<Comment[]>([]);
  const commentList = commentDataList.map((data, idx) => (
    <CommentCard key={`post_comment_${idx}`} data={data} />
  ));
  useEffect(() => {
    (async () => {
      try {
        const response = await getComment({
          postId: postId,
          sortType: "LATEST",
        });
        if (Array.isArray(response)) {
          setCommentDataList([...response]);
        }
      } catch (error) {
        console.error("Error Getting community post", error);
      }
    })();
  }, []);
  return <S.Container>{commentList}</S.Container>;
};

export default CommentList;

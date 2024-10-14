import * as S from "./style";
import Header from "../../widgets/post-detail/header/Header";
import CommentList from "../../widgets/post-detail/comment-list/CommentList";
import PostContent from "../../widgets/post-detail/post-content/PostContent";
import CommentInput from "../../widgets/post-detail/comment-input/CommentInput";

const PostDetail = () => {
  return (
    <S.Container>
      <Header />
      <PostContent />
      <CommentInput />
      <CommentList />
    </S.Container>
  );
};

export default PostDetail;

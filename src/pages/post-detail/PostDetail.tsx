import * as S from "./style";
import Header from "../../widgets/post-detail/header/Header";
import PageForm from "../../shared/ui/page-form/PageForm";
import CommentList from "../../widgets/post-detail/comment-list/CommentList";
import PostContent from "../../widgets/post-detail/post-content/PostContent";
import CommentInput from "../../widgets/post-detail/comment-input/CommentInput";

const PostDetail = () => {
  return (
    <PageForm isGNB={true}>
      <S.Container>
        <Header />
        <PostContent />
        <CommentInput />
        <CommentList />
      </S.Container>
    </PageForm>
  );
};

export default PostDetail;

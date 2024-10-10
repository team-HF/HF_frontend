import * as S from "./style";
import Header from "../../widgets/post-register/header/Header";
import PostContents from "../../widgets/post-register/post-contents/PostContents";

const PostRegister = () => {
  return (
    <S.Container>
      <Header />
      <PostContents />
    </S.Container>
  );
};

export default PostRegister;

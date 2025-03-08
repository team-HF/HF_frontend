import * as S from "./style";
import Alert from "../../shared/ui/alert/Alert";
import PageForm from "../../shared/ui/page-form/PageForm";
import CommentList from "../../widgets/post-detail/comment-list/CommentList";
import PostContent from "../../widgets/post-detail/post-content/PostContent";
import CommentInput from "../../widgets/post-detail/comment-input/CommentInput";
import { User } from "../../shared/types/user";
import { TPost } from "../../shared/types/community";
import { useEffect, useState } from "react";
import { useDeletePost as deletePost } from "../../widgets/post-detail/post-content/api/useDeletePost";
import { useGetPostDetail as getPostDetail } from "./api/useGetPostDetail";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { postDeleteAlert } from "./contants/text";
import { useMyProfileStore } from "../../shared/store/my-profile-store";
import { useGetMyData } from "../../shared/api/useGetMyData";
import NewHeader from "../../shared/ui/new-header/NewHeader";

const PostDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const postId = Number(id);
  const { data: myData } = useGetMyData();
  const { setMyProfile } = useMyProfileStore();

  const [postData, setPostData] = useState<TPost | null>(null);
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  const deleteCurrentPost = async () => {
    const response = await deletePost(postId);
    if (response.statusCode === 200) {
      navigate("/community?postCategory=ALL&fitnessLevel=ADVANCED");
    }
  };

  const headerNavigation = () => {
    const previousPath = location.state?.from;
    if (previousPath === "/community/post-register") {
      navigate("/community?postCategory=ALL&fitnessLevel=ADVANCED");
    } else {
      navigate(previousPath);
    }
  };

  useEffect(() => {
    (async () => {
      setMyProfile(myData as User);
      const postDetailResponse = await getPostDetail(postId);
      setPostData(postDetailResponse.content);
    })();
  }, [myData]);

  return (
    <PageForm isGNB={true}>
      <S.Container>
        <NewHeader
          title="커뮤니티"
          isBackBtn={true}
          onClickBack={headerNavigation}
        />
        <PostContent
          setAlertOpen={setAlertOpen}
          postData={postData}
          postId={postId}
        />
        <CommentInput />
        <CommentList comments={postData?.comments ?? null} />
      </S.Container>
      {alertOpen && (
        <Alert
          title={postDeleteAlert.title}
          content={postDeleteAlert.body}
          cancelBtn={true}
          cancel={() => setAlertOpen(false)}
          confirm={deleteCurrentPost}
        />
      )}
    </PageForm>
  );
};

export default PostDetail;

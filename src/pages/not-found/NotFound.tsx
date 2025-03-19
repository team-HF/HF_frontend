import { useNavigate } from "react-router-dom";
import NewHeader from "../../shared/ui/new-header/NewHeader";
import PageForm from "../../shared/ui/page-form/PageForm";
import * as S from "./style";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <PageForm isGNB={true} isFooter={true}>
      <S.Container>
        <NewHeader
          isBackBtn={true}
          onClickBack={() => navigate(-1)}
          logo={true}
          isLoginBtn={true}
          isAlarmBtn={true}
        />
        <S.ContentContainer>
          <S.NotFoundImage src="/svg/404.webp" alt="page-not-found" />
          <S.NotFoundText>페이지를 찾을 수 없습니다.</S.NotFoundText>
        </S.ContentContainer>
      </S.Container>
    </PageForm>
  );
}

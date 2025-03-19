import { TTermsData } from "../../../pages/agreement/Agreement";
import * as S from "./style";

interface ModalProps {
  closeModal: () => void;
  data: TTermsData | null;
}

const DetailModal = ({ closeModal, data }: ModalProps) => {
  const termsArr =
    data &&
    Object.keys(data)
      .filter((key) => key.startsWith("term_"))
      .map((key) => data[key as keyof Omit<TTermsData, "title">]);
  return (
    <S.Modal>
      <S.Container>
        <S.Box className="space-between header align-center">
          <S.IconBtn onClick={closeModal}>
            <S.CloseIcon src={"public/svg/arrow-down.svg"} />
          </S.IconBtn>
          <S.Text className="title">{data?.title}</S.Text>
          <S.Spacer />
        </S.Box>
        <S.Box className="column scroll">
          {termsArr &&
            termsArr.map((term) => (
              <S.Box className="column">
                <S.Text className="sub_title">{term.subTitle}</S.Text>
                <S.Text className="content margin_bottom_16">
                  {term.content}
                </S.Text>
              </S.Box>
            ))}
        </S.Box>
      </S.Container>
    </S.Modal>
  );
};

export default DetailModal;

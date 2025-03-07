import { useEffect, useState } from "react";
import * as S from "./style";
import DetailModal from "../../widgets/agreemens/Detail-modal/DetailModal";
import { locationServiceTerm } from "../../entities/agreement/location-terms-data";
import { serviceTerms } from "../../entities/agreement/service-terms-data";
import { personalInfoTerms } from "../../entities/agreement/personal-info-terms-data";
import { infoCollectTerms } from "../../entities/agreement/info-collect-terms-data";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

type TTermItem = {
  subTitle: string;
  content: string;
};

export type TTermsData = {
  title: string;
} & {
  [key: `term_${number}`]: TTermItem;
};

const Agreement = () => {
  const navigate = useNavigate();

  const [agreements, setAgreements] = useState([
    { content: "만 14세 이상입니다", value: false },
    { content: "위치기반 서비스 이용약관", value: false },
    { content: "서비스 이용약관", value: false },
    { content: "개인정보 처리방침", value: false },
    { content: "개인정보 수집 및 이용동의", value: false },
  ]);
  const [DetailModalOpen, setDetailModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<TTermsData | null>(null);

  const allAgreed = agreements.map((term) => term.value).every(Boolean);

  const changeAllState = () => {
    setAgreements((prev) =>
      prev.map((item) => ({ ...item, value: !allAgreed }))
    );
  };

  const toggleAgreement = (index: number) => {
    setAgreements((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, value: !item.value } : item
      )
    );
  };

  const openModal = (idx: number) => {
    if (idx === 1) {
      setModalData(locationServiceTerm);
    } else if (idx === 2) {
      setModalData(serviceTerms);
    } else if (idx === 3) {
      setModalData(personalInfoTerms);
    } else if (idx === 4) {
      setModalData(infoCollectTerms);
    } else {
      return;
    }
    setDetailModalOpen(true);
  };

  const closeModal = () => {
    setModalData(null);
    setDetailModalOpen(false);
  };

  useEffect(() => {
    const isNewMember = Cookies.get("is_new_member");
    if (isNewMember === "false") {
      navigate("/");
    }
  }, []);

  return (
    <S.Container>
      <S.BodyContainer>
        <S.Title>이용약관 동의</S.Title>
        <S.ContentContainer>
          <S.AgreementItemContainer className="gap_8">
            <img
              src={
                allAgreed ? "/svg/check-icon.svg" : "/svg/select-box-Icon.svg"
              }
              onClick={changeAllState}
            />
            <S.AgreeAllCheckText>모두 확인, 동의합니다</S.AgreeAllCheckText>
          </S.AgreementItemContainer>
          <S.Divider />
          <S.CheckListContainer>
            {agreements.map((term, idx) => (
              <S.AgreementItemContainer
                key={`${term.content} 동의 버튼`}
                className="space_between"
              >
                <S.AgreementItemContainer className="gap_8">
                  <img
                    src={
                      agreements[idx].value
                        ? "/svg/check-icon.svg"
                        : "/svg/select-box-Icon.svg"
                    }
                    onClick={() => toggleAgreement(idx)}
                  />
                  <S.TermContentText>{term.content}</S.TermContentText>
                  <S.TermContentText className="require_text">
                    (필수)
                  </S.TermContentText>
                </S.AgreementItemContainer>
                {idx !== 0 && (
                  <S.MoreBtn onClick={() => openModal(idx)}>보기</S.MoreBtn>
                )}
              </S.AgreementItemContainer>
            ))}
          </S.CheckListContainer>
        </S.ContentContainer>
        <S.DoneBtn
          disabled={!allAgreed}
          onClick={() => {
            navigate("/register/exercise-style");
          }}
        >
          계속
        </S.DoneBtn>
      </S.BodyContainer>
      {DetailModalOpen && (
        <DetailModal closeModal={closeModal} data={modalData} />
      )}
    </S.Container>
  );
};

export default Agreement;

import * as S from './information-modal.style';

type modalTypes = {
  onClose: () => void;
};
export default function InformationModal({ onClose }: modalTypes) {
  return (
    <S.Container>
      <S.InnerContainer>
        <S.IconContainer>
          <S.XIcon src="/svg/x-icon.svg" alt="x icon" onClick={onClose} />
        </S.IconContainer>
        <S.InformationContainer title="고수">
          <S.TitleContainer title="고수">고수</S.TitleContainer>
          <S.DescriptionContainer title="고수">
            운동 자세를 알거나 운동 관련 지식 보유, 나만의 루틴이 있어요
          </S.DescriptionContainer>
        </S.InformationContainer>
        <S.InformationContainer title="새싹">
          <S.TitleContainer title="새싹">새싹</S.TitleContainer>
          <S.DescriptionContainer title="새싹">
            운동 자세, 루틴 등이 없고 무슨 운동을 해야 할지 모르겠어요
          </S.DescriptionContainer>
        </S.InformationContainer>
      </S.InnerContainer>
    </S.Container>
  );
}

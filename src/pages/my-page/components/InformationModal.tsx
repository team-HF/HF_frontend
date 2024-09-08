import * as s from './information-modal.style';

export default function InformationModal() {
  return (
    <s.Container>
      <s.InnerContainer>
        <s.IconContainer>
          <s.XIcon src="/svg/x-icon.svg" alt="x icon" />
        </s.IconContainer>
        <s.InformationContainer title="고수">
          <s.TitleContainer title="고수">고수</s.TitleContainer>
          <s.DescriptionContainer title="고수">
            운동 자세를 알거나 운동 관련 지식 보유, 나만의 루틴이 있어요
          </s.DescriptionContainer>
        </s.InformationContainer>
        <s.InformationContainer title="새싹">
          <s.TitleContainer title="새싹">새싹</s.TitleContainer>
          <s.DescriptionContainer title="새싹">
            운동 자세, 루틴 등이 없고 무슨 운동을 해야 할지 모르겠어요
          </s.DescriptionContainer>
        </s.InformationContainer>
      </s.InnerContainer>
    </s.Container>
  );
}

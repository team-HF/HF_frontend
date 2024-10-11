import * as s from './style';

export default function CancelButton() {
  return (
    <s.Container>
      <s.CancelButtonContainer>
        <s.CancelSVG src="/svg/cancel-icon.svg" alt="cancel-icon" />
      </s.CancelButtonContainer>
    </s.Container>
  );
}

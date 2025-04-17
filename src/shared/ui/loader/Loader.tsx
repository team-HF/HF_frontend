import * as S from './style';

const Loader = () => {
  return (
    <S.Container data-testid="loader" role="status">
      <S.Content />
    </S.Container>
  );
};

export default Loader;

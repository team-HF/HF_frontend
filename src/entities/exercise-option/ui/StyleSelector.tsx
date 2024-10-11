import * as S from './style-selector.style';

type Option = {
  label: string;
  emoji: string;
};

type CategoryProps = {
  title: string;
  options: Option[];
  selectedOption: string | null;
  setSelectedOption: (option: string) => void;
};

export default function StyleSelector({
  title,
  options,
  selectedOption,
  setSelectedOption,
}: CategoryProps) {
  return (
    <S.Container>
      <S.CategoryTitleContainer>
        <S.StyleSpan>&#9654;</S.StyleSpan>
        <S.CategoryTitle>{title}</S.CategoryTitle>
      </S.CategoryTitleContainer>
      <S.CategoryContainer>
        {options.map((option) => (
          <S.OptionCard
            key={option.label}
            selected={selectedOption === option.label}
            onClick={() => setSelectedOption(option.label)}
          >
            <span>{option.emoji}</span>
            <p>{option.label}</p>
          </S.OptionCard>
        ))}
      </S.CategoryContainer>
    </S.Container>
  );
}

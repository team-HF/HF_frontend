import * as S from "./style-selector.style";

type Option = {
  label: string;
  src: string;
  value: string;
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
      <S.CategoryTitle>{title}</S.CategoryTitle>
      <S.CategoryContainer>
        {options.map((option) => (
          <S.OptionCard
            key={option.label}
            selected={selectedOption === option.value}
            onClick={() => setSelectedOption(option.value)}
          >
            <img src={option.src} />
            <p>{option.label}</p>
          </S.OptionCard>
        ))}
      </S.CategoryContainer>
    </S.Container>
  );
}

import * as s from './style-selector.style';

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
    <s.Container>
      <s.StyleCategoryTitleContainer>
        <s.StyleSpan>&#9654;</s.StyleSpan>
        <s.StyleCategoryTitle>{title}</s.StyleCategoryTitle>
      </s.StyleCategoryTitleContainer>
      <s.StyleCategoryContainer>
        {options.map((option) => (
          <s.StyleOptionCard
            key={option.label}
            selected={selectedOption === option.label}
            onClick={() => setSelectedOption(option.label)}
          >
            <span>{option.emoji}</span>
            <p>{option.label}</p>
          </s.StyleOptionCard>
        ))}
      </s.StyleCategoryContainer>
    </s.Container>
  );
}

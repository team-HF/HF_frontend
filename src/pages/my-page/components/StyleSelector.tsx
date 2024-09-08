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
      <s.CategoryTitleContainer>
        <s.StyleSpan>&#9654;</s.StyleSpan>
        <s.CategoryTitle>{title}</s.CategoryTitle>
      </s.CategoryTitleContainer>
      <s.CategoryContainer>
        {options.map((option) => (
          <s.OptionCard
            key={option.label}
            selected={selectedOption === option.label}
            onClick={() => setSelectedOption(option.label)}
          >
            <span>{option.emoji}</span>
            <p>{option.label}</p>
          </s.OptionCard>
        ))}
      </s.CategoryContainer>
    </s.Container>
  );
}

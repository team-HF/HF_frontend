import { useEffect, useState } from "react";
import * as S from "./style";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  useEffect(() => {
    setCurrentProgress(progress);
  }, [progress]);
  return (
    <S.Container>
      <S.ProgressBar progress={currentProgress} />
    </S.Container>
  );
};

export default ProgressBar;

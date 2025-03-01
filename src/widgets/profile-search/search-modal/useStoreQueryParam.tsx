import {
  CompanionStyle,
  FitnessEagerness,
  FitnessKind,
  FitnessObjective,
  getCompanionStyleText,
  getFITNESS_OBJECTIVE_MAP,
  getFitnessEagernessText,
  getFitnessKindText,
} from "../../../shared/constants/fitness-category";
import { TFitnessStyle } from "../../../shared/constants/fitness-style";

const allowedKeys = [
  "companionStyles",
  "fitnessObjectives",
  "fitnessKinds",
  "fitnessEagernesses",
];

type TFitnessStyleId = TFitnessStyle["id"];

const styleContent = (type: string, id: string) => {
  if (type === "companionStyles") {
    return getCompanionStyleText(id as CompanionStyle);
  } else if (type === "fitnessObjectives") {
    return getFITNESS_OBJECTIVE_MAP(id as FitnessObjective);
  } else if (type === "fitnessKinds") {
    return getFitnessKindText(id as FitnessKind);
  } else {
    return getFitnessEagernessText(id as FitnessEagerness);
  }
};

export const useStoreQueryParam = () => {
  const params = new URLSearchParams(window.location.search);
  const result: TFitnessStyle[] = [];
  for (const [key, value] of params.entries()) {
    if (allowedKeys.includes(key)) {
      const values = value.split(",");
      values.forEach((val) => {
        result.push({
          type: key,
          id: val as TFitnessStyleId,
          content: styleContent(key, val),
        });
      });
    }
  }
  return result;
};

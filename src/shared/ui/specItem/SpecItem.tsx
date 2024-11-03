import * as S from "./style";
import {
  TSpec,
  TSpecItem,
  useProfileStore,
} from "../../../features/profile/store/profile-store";

const SpecItem = (props: TSpec) => {
  const { specs, setUpdateSpec } = useProfileStore();
  const index = specs.findIndex((item) => item.specId === props.specId);
  const changeValue = <K extends keyof TSpecItem>(
    name: K,
    value: TSpecItem[K]
  ) => {
    specs[index].spec[name] = value;
    setUpdateSpec(specs);
  };

  return (
    <S.Container>
      <S.Input
        placeholder="경력 및 수상명"
        className="spec_title"
        value={props.spec.title}
        name="title"
        onChange={(e) =>
          changeValue(e.target.name as keyof TSpecItem, e.target.value)
        }
      />
      <S.Input
        placeholder="과정 및 장소명"
        className="spec_description"
        value={props.spec.description}
        name="description"
        onChange={(e) =>
          changeValue(e.target.name as keyof TSpecItem, e.target.value)
        }
      />
      <S.Input
        type="date"
        className="spec_date"
        required
        aria-required="true"
        placeholder="시작일"
        value={props.spec.startDate}
        name="startDate"
        onChange={(e) =>
          changeValue(e.target.name as keyof TSpecItem, e.target.value)
        }
      />
      <S.Input
        type="date"
        className="spec_date"
        required
        aria-required="true"
        placeholder="종료일"
        value={props.spec.endDate}
        name="endDate"
        onChange={(e) =>
          changeValue(e.target.name as keyof TSpecItem, e.target.value)
        }
      />
    </S.Container>
  );
};

export default SpecItem;

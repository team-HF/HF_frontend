import * as S from "./style";
import { ContentsTypeData } from "../../../entities/community/contents-type-data";
import SearchTabItem from "../../../shared/ui/search-tab-item/SearchTabItem";

export interface contentTypeProps {
  contentType: string;
  setContentType: React.Dispatch<React.SetStateAction<string>>;
}

const ContentsType = ({ contentType, setContentType }: contentTypeProps) => {
  const filterList = ContentsTypeData.map((data) => {
    return (
      <SearchTabItem
        key={`community_filer_${data.name}`}
        id={data.name}
        $current_filter={contentType}
        setContentType={setContentType}
      />
    );
  });
  return <S.Container>{filterList}</S.Container>;
};

export default ContentsType;

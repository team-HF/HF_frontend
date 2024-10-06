import * as S from "./style";
import { useState } from "react";
import { ContentsTypeData } from "../../entities/community/contents-type-data";
import FilterBar from "../../widgets/community/filter-bar/FilterBar";
import ContentsType from "../../widgets/community/contents-type/ContentsType";
import CommunityHeader from "../../widgets/community/community-header/CommunityHeader";
import PostPreviewList from "../../shared/ui/post-preview-list/PostPreviewList";
import FloatingButton from "../../widgets/community/floating-button/FloatingButton";

const dummy = [
  {
    category: "카테고리",
    title: "대제목",
    description:
      "최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄",
    timestamp: "1시간 전",
    view: "12",
    heart: "14",
    comment: "13",
  },
  {
    category: "카테고리",
    title: "대제목",
    description:
      "최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄",
    timestamp: "1시간 전",
    view: "12",
    heart: "14",
    comment: "13",
  },
  {
    category: "카테고리",
    title: "대제목",
    description:
      "최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄",
    timestamp: "1시간 전",
    view: "12",
    heart: "14",
    comment: "13",
  },
  {
    category: "카테고리",
    title: "대제목",
    description:
      "최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄",
    timestamp: "1시간 전",
    view: "12",
    heart: "14",
    comment: "13",
  },
  {
    category: "카테고리",
    title: "대제목",
    description:
      "최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄최대 2줄",
    timestamp: "1시간 전",
    view: "12",
    heart: "14",
    comment: "13",
  },
];

const Community = () => {
  const [contentType, setContentType] = useState<string>(
    ContentsTypeData[0].name
  );
  const getFilterType = () => {
    const findObject = ContentsTypeData.find(
      (data) => data.name === contentType
    );
    return findObject ? findObject.filterType : "dropdown";
  };
  const contentsList = dummy.map((data) => <PostPreviewList data={data} />);
  return (
    <S.Container>
      <CommunityHeader />
      <ContentsType contentType={contentType} setContentType={setContentType} />
      <FilterBar filterType={getFilterType()} />
      <S.PostContainer>{contentsList}</S.PostContainer>
      <FloatingButton />
    </S.Container>
  );
};

export default Community;

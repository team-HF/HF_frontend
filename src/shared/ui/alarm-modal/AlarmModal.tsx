import * as S from "./style";
import EmptyList from "../empty-list/EmptyList";
import AlarmMessage from "../alarm-message/AlarmMessage";
import { useInView } from "react-intersection-observer";
import { getNotification } from "../../api/getNotification";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { COMMUNITY_MAP, MATCH_MAP } from "../../types/notification";

interface AlarmModalProps {
  closeModal: () => void;
}

const AlarmModal = ({ closeModal }: AlarmModalProps) => {
  const [ref, inView] = useInView();

  const [filter, setFilter] = useState<string | null>(null);

  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ["alarmList"],
    queryFn: ({ pageParam = 1 }) => getNotification(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.totalPages && lastPage.totalPages > allPages.length
        ? allPages.length + 1
        : undefined;
    },
  });

  const changeFilter = (value: string) => {
    if (value === filter) {
      setFilter(null);
    } else {
      setFilter(value);
    }
  };

  const notificationListData = data?.pages.flatMap((item) =>
    item?.notificationList.map((post) => post)
  );

  const filteredList = () => {
    if (filter === "match") {
      return notificationListData?.filter((alarm) => alarm.type in MATCH_MAP);
    } else if (filter === "community") {
      return notificationListData?.filter(
        (alarm) => alarm.type in COMMUNITY_MAP
      );
    } else {
      return notificationListData;
    }
  };

  const alarmList = filteredList()?.map((alarm, idx) => (
    <AlarmMessage key={`${idx}번째 알림`} alarm={alarm} />
  ));

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return (
    <S.AlarmModal>
      <S.Container>
        <S.TitleContainer>
          <S.Title>알림</S.Title>
          <S.IconBtn>
            <S.CloseIcon src="/svg/close-icon.svg" onClick={closeModal} />
          </S.IconBtn>
        </S.TitleContainer>
        <S.CategoryContainer>
          <S.CategoryTag
            $isValidValue={filter === "match"}
            onClick={() => changeFilter("match")}
          >
            매칭
          </S.CategoryTag>
          <S.CategoryTag
            $isValidValue={filter === "community"}
            onClick={() => changeFilter("community")}
          >
            커뮤니티
          </S.CategoryTag>
        </S.CategoryContainer>
        <S.MessageContainer>
          {alarmList && alarmList.length ? (
            <>
              {alarmList}
              {isLoading ? <span>로딩중</span> : <div ref={ref} />}
            </>
          ) : (
            <EmptyList isBtn={false}>알림이 없습니다.</EmptyList>
          )}
        </S.MessageContainer>
      </S.Container>
    </S.AlarmModal>
  );
};

export default AlarmModal;

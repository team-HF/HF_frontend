// import { useState, useEffect } from "react";
// import { useNotificationStore } from "../store/alarm-store";

// export const useGetSSE = () => {
//   const [reconnect, setReconnect] = useState(false);

//   useEffect(() => {
//     const lastEventId = localStorage.getItem("LastEventId") || "";

//     const eventSource = new EventSource("/HF/Connect/SSE", {
//       withCredentials: true, // 필요시 추가
//       headers: { LastEventId: lastEventId },
//       // eslint-disable-next-line
//     } as any);

//     eventSource.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       useNotificationStore.getState().addNotification(data);

//       // LastEventId 업데이트
//       if (event.lastEventId) {
//         localStorage.setItem("LastEventId", event.lastEventId);
//       }
//     };

//     eventSource.onerror = () => {
//       console.error("SSE 연결 오류. 5초 후 재연결...");
//       eventSource.close();
//       setReconnect(true); // 오류 발생 시 재연결 상태 설정
//     };

//     return () => {
//       eventSource.close();
//     };
//   }, [reconnect]); // reconnect 상태가 변경될 때마다 useEffect 실행

//   useEffect(() => {
//     if (reconnect) {
//       const timeout = setTimeout(() => {
//         setReconnect(false); // 5초 후 reconnect 상태를 false로 변경하여 재연결 시도
//       }, 5000);

//       // 컴포넌트가 unmount될 때 타이머 정리
//       return () => clearTimeout(timeout);
//     }
//   }, [reconnect]); // reconnect 상태가 true일 때 재연결 시도
// };

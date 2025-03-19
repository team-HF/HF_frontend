import Cookies from "js-cookie";
import { useAccountExpiresStore } from "../store/account-expires-store";
import { useMyProfileStore } from "../store/my-profile-store";

const useSetRequireModal = () => {
  const accessToken = Cookies.get("access_token");
  const { setRequireModalOpen } = useAccountExpiresStore();
  const { myProfile } = useMyProfileStore();

  return (fn: () => void) => {
    if (accessToken && myProfile?.memberId) {
      fn();
    } else {
      setRequireModalOpen(true);
    }
  };
};

export default useSetRequireModal;

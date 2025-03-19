// ResetProfileEditStoreOnExit.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProfileEditStore } from '../../profile-setting/store/profile-edit-store';

export default function ResetProfileEditStoreOnExit() {
  const location = useLocation();
  const reset = useProfileEditStore((state) => state.reset);

  useEffect(() => {
    if (!location.pathname.startsWith('/profile-setting')) {
      reset();
      useProfileEditStore.persist.clearStorage();
    }
  }, [location.pathname, reset]);

  return null;
}

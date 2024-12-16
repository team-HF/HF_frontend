import * as S from './update-my-data-button';
import { useProfileStore } from '../../profile/store/profile-store';
import { usePutMyData } from '../api/usePatchMyData';
import { useGetMyData } from '../../../shared/api/useGetMyData';
type UpdateButtonProps = {
  disabled: boolean;
};

interface UpdateMyDataRequest {
  profileImageFileExtension?: string | null;
  name?: string;
  cd1?: string;
  cd2?: string;
  cd3?: string;
  introduction?: string;
  fitnessLevel: 'BEGINNER' | 'ADVANCED';
  companionStyle?: 'SMALL' | 'GROUP';
  fitnessEagerness?: 'EAGER' | 'LAZY';
  fitnessObjective?: 'BULK_UP' | 'RUNNING';
  fitnessKind?: 'HIGH_STRESS' | 'FUNCTIONAL';
}

export default function UpdateMyDataButton({ disabled }: UpdateButtonProps) {
  const { data: myData, isLoading } = useGetMyData();
  const { mutate: uploadMyData } = usePutMyData(myData?.memberId ?? 0);
  const { image, cd1, cd2, cd3, introduction } = useProfileStore();

  const updateMyData = async () => {
    if (!myData?.memberId) {
      alert('회원 정보가 아직 로드되지 않았습니다.');
      return;
    }

    const imageFileExtension = image?.type.split('/')[1] || null;

    const requestData: UpdateMyDataRequest = {
      profileImageFileExtension: imageFileExtension,
      cd1: cd1 || undefined,
      cd2: cd2?.slice(2) || undefined,
      cd3: cd3?.slice(5) || undefined,
      introduction: introduction || undefined,
      fitnessLevel: 'BEGINNER',
      companionStyle: myData?.companionStyle as 'SMALL' | 'GROUP' | undefined,
      fitnessEagerness: myData?.fitnessEagerness as
        | 'EAGER'
        | 'LAZY'
        | undefined,
      fitnessObjective: myData?.fitnessObjective as
        | 'BULK_UP'
        | 'RUNNING'
        | undefined,
      fitnessKind: myData?.fitnessKind as
        | 'HIGH_STRESS'
        | 'FUNCTIONAL'
        | undefined,
    };

    uploadMyData(requestData);
  };

  if (isLoading) return <p>로딩 중...</p>;

  return (
    <S.Btn disabled={disabled} onClick={() => updateMyData()}>
      저장
    </S.Btn>
  );
}

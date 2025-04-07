import * as S from './update-my-data-button';
import { usePatchMyData } from '../api/usePatchMyData';
import { useGetMyData } from '../../../shared/api/useGetMyData';
import { useNavigate } from 'react-router-dom';
import Loader from '../../../shared/ui/loader/Loader';
import axios from 'axios';

export interface UpdateMyDataButtonProps {
  nickname: string;
  disabled: boolean;
  image?: File;
  cd1?: string;
  cd2?: string;
  cd3?: string;
  introduction?: string;
  styleSelected: 'SMALL' | 'GROUP';
  habitSelected: 'EAGER' | 'LAZY';
  goalSelected: 'BULK_UP' | 'RUNNING';
  exerciseSelected: 'HIGH_STRESS' | 'FUNCTIONAL';
}

interface UpdateMyDataRequest {
  profileImageFileExtension: string | null;
  nickname?: string;
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

const uploadImageFile = async (file: File, uploadUrl: string) => {
  try {
    const response = await axios.put(uploadUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
      withCredentials: true,
    });
    return response.data;
  } catch {
    throw new Error('이미지 업로드 실패');
  }
};

export default function UpdateMyDataButton({
  nickname,
  disabled,
  image,
  cd1,
  cd2,
  cd3,
  introduction,
  styleSelected,
  habitSelected,
  goalSelected,
  exerciseSelected,
}: UpdateMyDataButtonProps) {
  const { data: myData, isLoading } = useGetMyData();
  const { mutate: uploadMyData } = usePatchMyData(myData?.memberId ?? 0);
  const navigate = useNavigate();

  const updateMyData = async () => {
    if (!myData?.memberId) {
      alert('회원 정보가 아직 로드되지 않았습니다.');
      return;
    }

    let imageFileExtension: string | null = null;
    if (image) {
      imageFileExtension = image.type.split('/')[1] || null;
    }

    const requestData: UpdateMyDataRequest = {
      profileImageFileExtension: imageFileExtension,
      nickname,
      cd1,
      cd2: cd2 || undefined,
      cd3: cd3 || undefined,
      introduction,
      fitnessLevel: 'BEGINNER',
      companionStyle: styleSelected,
      fitnessEagerness: habitSelected,
      fitnessObjective: goalSelected,
      fitnessKind: exerciseSelected,
    };

    try {
      uploadMyData(requestData, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSuccess: async (responseData: any) => {
          const uploadUrl =
            responseData.profileImageUploadUrl ||
            (responseData.content &&
              responseData.content.profileImageUploadUrl);

          if (image && uploadUrl) {
            try {
              await uploadImageFile(image, uploadUrl);
              navigate('/my-page');
            } catch {
              alert('이미지 업로드에 실패했습니다.');
            }
          } else {
            navigate('/my-page');
          }
        },
        onError: () => {
          alert('프로필 업데이트에 실패했습니다.');
        },
      });
    } catch {
      alert('요청을 처리할 수 없습니다.');
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <S.Btn disabled={disabled} onClick={updateMyData}>
      저장
    </S.Btn>
  );
}

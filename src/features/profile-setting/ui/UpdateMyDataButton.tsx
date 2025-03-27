import * as S from './update-my-data-button';
import { usePatchMyData } from '../api/usePatchMyData';
import { useGetMyData } from '../../../shared/api/useGetMyData';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../shared/utils/useAxios';

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
  image?: File;
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
    const response = await axiosInstance.put(uploadUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Image upload failed:', error);
    throw new Error('Image upload failed');
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
      imageFileExtension = image.type.split('/')[1].replace('+xml', '') || null;
    }

    const transformedCd2 =
      myData && cd2 !== myData.cd2
        ? cd2?.slice(cd2.length - myData.cd2.length)
        : cd2;
    const transformedCd3 =
      myData && cd3 !== myData.cd3
        ? cd3?.slice(cd3.length - myData.cd3.length)
        : cd3;

    const requestData: UpdateMyDataRequest = {
      profileImageFileExtension: imageFileExtension,
      nickname,
      cd1: cd1 || undefined,
      cd2: transformedCd2 || undefined,
      cd3: transformedCd3 || undefined,
      introduction: introduction || undefined,
      fitnessLevel: 'BEGINNER',
      companionStyle: styleSelected,
      fitnessEagerness: habitSelected,
      fitnessObjective: goalSelected,
      fitnessKind: exerciseSelected,
    };

    uploadMyData(requestData, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onSuccess: async (responseData: any) => {
        if (
          image &&
          responseData.content &&
          responseData.content.profileImageUploadUrl
        ) {
          try {
            await uploadImageFile(
              image,
              responseData.content.profileImageUploadUrl
            );
          } catch {
            alert('이미지 업로드에 실패했습니다.');
            return;
          }
        }
        navigate('/my-page');
      },
    });
  };

  if (isLoading) return <p>로딩 중...</p>;

  return (
    <S.Btn disabled={disabled} onClick={updateMyData}>
      저장
    </S.Btn>
  );
}

import Cookies from 'js-cookie';
import * as S from './update-my-data-button';
import { useProfileStore } from '../../profile/store/profile-store';
import { useGetParams } from '../../../shared/utils/useGetParams';
import { usePutMyData } from '../api/usePatchMyData';
import { useGetMyData } from '../../../shared/api/useGetMyData';
type UpdateButtonProps = {
  disabled: boolean;
};

export default function UpdateMyDataButton({ disabled }: UpdateButtonProps) {
  const companionStyle = useGetParams('companionStyle');
  const fitnessEagerness = useGetParams('fitnessEagerness');
  const fitnessObjective = useGetParams('fitnessObjective');
  const fitnessKind = useGetParams('fitnessKind');

  const id = Cookies.get('email') || '';
  const name = Cookies.get('name') || '';

  const { data: myData } = useGetMyData();
  const { mutate: uploadMyData } = usePutMyData(myData?.memberId ?? 0);
  const {
    image,
    nickname,
    dateYear,
    dateMonth,
    dateDay,
    gender,
    cd1,
    cd2,
    cd3,
    introduction,
  } = useProfileStore();

  const updateMyData = async () => {
    const imageFileExtension = image?.type.split('/')[1] || undefined;
    const requestData = {
      profileImageFileExtension: imageFileExtension,
      id: id || undefined,
      name: name || undefined,
      nickname: nickname || undefined,
      birthDate:
        dateYear && dateMonth && dateDay
          ? `${dateYear}-${dateMonth}-${dateDay}`
          : undefined,
      gender: gender || undefined,
      cd1: cd1 || undefined,
      cd2: cd2?.slice(2) || undefined,
      cd3: cd3?.slice(5) || undefined,
      introduction: introduction || undefined,
      fitnessLevel: 'BEGINNER',
      companionStyle: companionStyle || undefined,
      fitnessEagerness: fitnessEagerness || undefined,
      fitnessObjective: fitnessObjective || undefined,
      fitnessKind: fitnessKind || undefined,
      specs: [],
    };

    if (myData?.memberId) {
      uploadMyData(requestData);
      console.log(requestData);
    }
  };
  return (
    <S.Btn disabled={disabled} onClick={() => updateMyData()}>
      완료
    </S.Btn>
  );
}

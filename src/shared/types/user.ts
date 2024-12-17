import { Spec } from './spec';

export interface UserData {
  profileImageFileExtension: string | null;
  id: string | null;
  name: string | null;
  nickname: string | null;
  birthDate: string | null;
  gender: string | null;
  cd1: string | null;
  cd2: string | null;
  cd3: string | null;
  introduction: string | null;
  fitnessLevel: string | null;
  companionStyle: string | null;
  fitnessEagerness: string | null;
  fitnessObjective: string | null;
  fitnessKind: string | null;
  specs: Spec[];
}

import axiosInstance from '../../../shared/utils/useAxios';
import { AxiosInstance } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateImageFile = async (userData: any, image?: File) => {
  try {
    const response = await axiosInstance.put('/hf/members/me', userData, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.data.content.profileImageUploadUrl && image) {
      await uploadImageFile(
        axiosInstance,
        response.data.content.profileImageUploadUrl,
        image
      );
    }
    return response.data;
  } catch (error) {
    console.error('프로필 이미지 업로드 에러', error);
    throw error;
  }
};

export const uploadImageFile = async (
  axiosInstance: AxiosInstance,
  url: string,
  image: File
) => {
  const response = await axiosInstance.put(url, image, {
    headers: { 'Content-Type': image.type },
  });
  return response.data;
};

import { z } from 'zod';

export const UserSchema = z.object({
  image: z.string().optional(),
  nickname: z
    .string()
    .min(1, '닉네임을 입력해주세요')
    .max(8, '닉네임의 길이는 8글자 이하 입니다.')
    .regex(
      /^[a-zA-Z0-9가-힣]{1,8}$/,
      '닉네임은 영문, 숫자, 한글만 포함 가능합니다.'
    ),
  birth: z.string().min(1, '생년월일을 입력해주세요'),
  gender: z.string().min(1, '성별을 선택해주세요'),
  introduction: z.string().min(1, '한줄 소개를 입력해주세요'),
});

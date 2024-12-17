import { z } from 'zod';

export const MyDataSchema = z.object({
  memberId: z.number(),
  loginId: z.string(),
  role: z.string(),
  name: z.string(),
  email: z.string(),
  birthDate: z.string(),
  cd1: z.string(),
  cd2: z.string(),
  cd3: z.string(),
  companionStyle: z.enum(['SMALL', 'GROUP'] as const),
  creationTime: z.string(),
  fitnessEagerness: z.enum(['EAGER', 'LAZY'] as const),
  fitnessKind: z.enum(['HIGH_STRESS', 'FUNCTIONAL'] as const),
  fitnessLevel: z.enum(['BEGINNER', 'ADVANCED'] as const),
  fitnessObjective: z.enum(['BULK_UP', 'RUNNING'] as const),
  gender: z.enum(['MALE', 'FEMALE'] as const),
  introduction: z.string(),
  matchedCount: z.number(),
  nickname: z.string(),
  profileImageUrl: z.string().nullable(),
  tier: z.object({
    fitnessLevel: z.string(),
    tier: z.number(),
  }),
});

export type MyData = z.infer<typeof MyDataSchema>;

export const UpdateMyDataSchema = z.object({
  cd1: z.string().optional(),
  cd2: z.string().optional(),
  cd3: z.string().optional(),
  introduction: z.string().optional(),
  fitnessLevel: z.enum(['BEGINNER', 'ADVANCED']),
  companionStyle: z.enum(['SMALL', 'GROUP']).optional(),
  fitnessEagerness: z.enum(['EAGER', 'LAZY']).optional(),
  fitnessObjective: z.enum(['BULK_UP', 'RUNNING']).optional(),
  fitnessKind: z.enum(['HIGH_STRESS', 'FUNCTIONAL']).optional(),
  profileImageFileExtension: z.string().nullable().optional(),
});
export type UpdateMyData = z.infer<typeof UpdateMyDataSchema>;

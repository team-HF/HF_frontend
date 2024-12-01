// my-data.ts
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
  companionStyle: z.string(),
  creationTime: z.string(),
  fitnessEagerness: z.string(),
  fitnessKind: z.string(),
  fitnessLevel: z.string(),
  fitnessObjective: z.string(),
  gender: z.string(),
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

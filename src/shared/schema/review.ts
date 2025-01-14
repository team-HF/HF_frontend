import { z } from 'zod';

export const ReviewSchema = z.object({
  matchingId: z.number(),
  reviewerId: z.number(),
  description: z.string(),
  score: z.number(),
  evaluationType: z.string(),
});

export type Review = z.infer<typeof ReviewSchema>;

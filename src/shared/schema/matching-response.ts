import { z } from 'zod';

export const MatchingResponseSchema = z.object({
  statusCode: z.number(),
  statusCodeSeries: z.number(),
  content: z.object({
    page: z.number(),
    pageSize: z.number(),
    totalElementCount: z.number(),
    totalPageCount: z.number(),
    content: z.array(
      z.object({
        matchingId: z.number(),
        meetingPlace: z.string(),
        meetingPlaceAddress: z.string(),
        matchingStatus: z.enum(['ACCEPTED', 'REJECTED', 'PENDING', 'FINISHED']),
        meetingTime: z.string(),
        finishTime: z.string().nullable(),
        opponentInfo: z.object({
          memberId: z.number(),
          nickname: z.string(),
          profileImageUrl: z.string().nullable(),
          fitnessLevel: z.enum(['BEGINNER', 'ADVANCED']),
          companionStyle: z.enum(['SMALL', 'GROUP']),
          fitnessEagerness: z.enum(['EAGER', 'LAZY']),
          fitnessObjective: z.enum(['BULK_UP', 'RUNNING']),
          fitnessKind: z.enum(['HIGH_STRESS', 'FUNCTIONAL']),
          cd1: z.string(),
          cd2: z.string(),
          cd3: z.string(),
          matchedCount: z.number(),
        }),
      })
    ),
  }),
});

export type MatchingResponse = z.infer<typeof MatchingResponseSchema>;

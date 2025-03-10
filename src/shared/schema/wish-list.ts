import { z } from 'zod';

export const WishListSchema = z.object({
  wishedId: z.number(),
  wisherId: z.number(),
});

export const WishListResponseSchema = z.object({
  statusCode: z.number(),
  statusCodeSeries: z.number(),
  message: z.string().nullable(),
  content: z.array(WishListSchema),
  page: z.number().optional(),
  totalPageCount: z.number().optional(),
});

export type WishList = z.infer<typeof WishListSchema>;
export type WishListResponse = z.infer<typeof WishListResponseSchema>;

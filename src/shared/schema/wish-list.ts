import { z } from 'zod';

export const WishListSchema = z.object({
  wishId: z.number(),
  wisherId: z.number(),
});

export const WishListResponseSchema = z.object({
  statusCode: z.number(),
  statusCodeSeries: z.number(),
  content: z.array(WishListSchema),
  page: z.number(),
  totalPageCount: z.number(),
});

export type WishList = z.infer<typeof WishListSchema>;
export type WishListResponse = z.infer<typeof WishListResponseSchema>;

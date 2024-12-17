import { z } from 'zod';

export const CouponSchema = z.object({
  couponId: z.number(),
  receiverId: z.number(),
  couponType: z.string(),
  expirationTime: z.string(),
  validPeriodInDays: z.number(),
  grantTime: z.string(),
  used: z.boolean(),
  read: z.boolean(),
  expired: z.boolean(),
  achievedLevel: z.number(),
  grantedMatchingCount: z.number(),
  leftMatchingCount: z.number(),
});

export const CouponResponseSchema = z.object({
  statusCode: z.number(),
  statusCodeSeries: z.number(),
  content: z.array(CouponSchema),
});

export type Coupon = z.infer<typeof CouponSchema>;
export type CouponResponse = z.infer<typeof CouponResponseSchema>;

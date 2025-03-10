import { z } from "zod";

export const titleSchema = z
  .string()
  .min(3, "Title must be at least 3 characters")
  .max(10, "Title must be at most 10 characters");

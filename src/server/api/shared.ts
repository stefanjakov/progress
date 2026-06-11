import { z } from "zod";

/** `YYYY-MM-DD` local day key supplied by the client (see `src/lib/date.ts`). */
export const dayKeySchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/, "Expected YYYY-MM-DD");

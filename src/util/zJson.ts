import { z } from "zod";

const literalSchema = z.union([z.string(), z.number(), z.boolean(), z.null()]);
type Literal = z.infer<typeof literalSchema>;
type Json = Literal | { [key: string]: Json } | Json[];
export const zJson: z.ZodType<Json> = z.lazy(() =>
	z.union([literalSchema, z.array(zJson), z.record(zJson)])
);

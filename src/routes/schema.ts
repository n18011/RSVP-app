import { z } from "zod";
 
export const formSchema = z.object({
  // reply: z.boolean(),
  phone1: z.string().regex(new RegExp("^[0-9]{3,4}$"), "半角数字3-4桁で入力してください"),
  phone2: z.string().regex(new RegExp("^[0-9]{3,4}$"), "半角数字3-4桁で入力してください"),
  phone3: z.string().regex(new RegExp("^[0-9]{4}$"), "半角数字4桁で入力してください"),
  // postCode1: z.coerce.number().min(3).max(3),
  // postCode2: z.coerce.number().min(4).max(4),
  // address: z.string().min(1).max(255),
  // comment: z.string().min(1).max(3000),
  // email: z.string().email(),
});
 
export type FormSchema = typeof formSchema;
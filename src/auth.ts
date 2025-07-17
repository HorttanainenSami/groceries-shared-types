import  z from 'zod';
import { userSchema } from './users';

export const loginReqBodySchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .toLowerCase()
    .email({ message: 'Invalid email adress' }),
  password: z.string(),
});
export type loginRequestBodyType = z.infer<typeof loginReqBodySchema>;

export const loginReponseSchema = z.object({
  token: z.string(),
  email: z.string(),
  id: z.string().uuid(),
});
export type LoginResponseType = z.infer<typeof loginReponseSchema>;
export const registerResponseSchema = userSchema.omit({password: true});
export type RegisterResponseType = z.infer<typeof registerResponseSchema>;
export const registerReqBodySchema = userSchema.pick({
  email: true,
  password: true,
  name: true,
});
export type newUserType = z.infer<typeof registerReqBodySchema>;
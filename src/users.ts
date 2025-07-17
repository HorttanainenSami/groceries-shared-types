import z from 'zod';

export const userSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  id: z.string().uuid(),
});
export type UserType = z.infer<typeof userSchema>;


export const searchQuery = userSchema.pick({name: true});

export type searchQueryType = z.infer<typeof searchQuery>;

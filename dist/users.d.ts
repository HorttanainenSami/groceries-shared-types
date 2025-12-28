import z from 'zod';
export declare const userSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
    id: string;
}, {
    name: string;
    email: string;
    password: string;
    id: string;
}>;
export type UserType = z.infer<typeof userSchema>;
export declare const searchQuery: z.ZodObject<Pick<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    id: z.ZodString;
}, "name">, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export type SearchQueryType = z.infer<typeof searchQuery>;
//# sourceMappingURL=users.d.ts.map
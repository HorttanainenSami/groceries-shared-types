import z from 'zod';
export declare const loginReqBodySchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type LoginRequestBodyType = z.infer<typeof loginReqBodySchema>;
export declare const loginReponseSchema: z.ZodObject<{
    token: z.ZodString;
    email: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    id: string;
    token: string;
}, {
    email: string;
    id: string;
    token: string;
}>;
export type LoginResponseType = z.infer<typeof loginReponseSchema>;
export declare const registerResponseSchema: z.ZodObject<Omit<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    id: z.ZodString;
}, "password">, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    id: string;
}, {
    name: string;
    email: string;
    id: string;
}>;
export type RegisterResponseType = z.infer<typeof registerResponseSchema>;
export declare const registerReqBodySchema: z.ZodObject<Pick<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    id: z.ZodString;
}, "name" | "email" | "password">, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
}, {
    name: string;
    email: string;
    password: string;
}>;
export type NewUserType = z.infer<typeof registerReqBodySchema>;
//# sourceMappingURL=auth.d.ts.map
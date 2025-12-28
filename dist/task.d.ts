import z from 'zod';
export declare const basicTaskSchema: z.ZodObject<{
    id: z.ZodString;
    task: z.ZodString;
    created_at: z.ZodString;
    completed_by: z.ZodNullable<z.ZodString>;
    completed_at: z.ZodNullable<z.ZodString>;
    task_relations_id: z.ZodString;
    order_idx: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    task: string;
    created_at: string;
    completed_by: string | null;
    completed_at: string | null;
    task_relations_id: string;
    order_idx: number;
}, {
    id: string;
    task: string;
    created_at: string;
    completed_by: string | null;
    completed_at: string | null;
    task_relations_id: string;
    order_idx?: number | undefined;
}>;
export declare const TaskSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    task: z.ZodString;
    created_at: z.ZodString;
    completed_by: z.ZodNullable<z.ZodString>;
    completed_at: z.ZodNullable<z.ZodString>;
    task_relations_id: z.ZodString;
    order_idx: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    task: string;
    created_at: string;
    completed_by: string | null;
    completed_at: string | null;
    task_relations_id: string;
    order_idx: number;
}, {
    id: string;
    task: string;
    created_at: string;
    completed_by: string | null;
    completed_at: string | null;
    task_relations_id: string;
    order_idx?: number | undefined;
}>, {
    id: string;
    task: string;
    created_at: string;
    completed_by: string | null;
    completed_at: string | null;
    task_relations_id: string;
    order_idx: number;
}, {
    id: string;
    task: string;
    created_at: string;
    completed_by: string | null;
    completed_at: string | null;
    task_relations_id: string;
    order_idx?: number | undefined;
}>;
export type TaskType = z.infer<typeof TaskSchema>;
export declare const baseModifyTaskSchema: z.ZodEffects<z.ZodObject<{
    completed_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    completed_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    task: z.ZodOptional<z.ZodString>;
    order_idx: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: string | null | undefined;
    order_idx?: number | undefined;
}, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: string | null | undefined;
    order_idx?: number | undefined;
}>, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: string | null | undefined;
    order_idx?: number | undefined;
}, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: string | null | undefined;
    order_idx?: number | undefined;
}>;
export declare const patchTaskSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    completed_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    completed_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    task: z.ZodOptional<z.ZodString>;
    order_idx: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: string | null | undefined;
    order_idx?: number | undefined;
}, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: string | null | undefined;
    order_idx?: number | undefined;
}>, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: string | null | undefined;
    order_idx?: number | undefined;
}, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: string | null | undefined;
    order_idx?: number | undefined;
}>, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: string | null | undefined;
    order_idx?: number | undefined;
}, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: string | null | undefined;
    order_idx?: number | undefined;
}>;
export declare const editTaskSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    task: z.ZodString;
    created_at: z.ZodString;
    completed_by: z.ZodNullable<z.ZodString>;
    completed_at: z.ZodNullable<z.ZodString>;
    task_relations_id: z.ZodString;
    order_idx: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    task: string;
    created_at: string;
    completed_by: string | null;
    completed_at: string | null;
    task_relations_id: string;
    order_idx: number;
}, {
    id: string;
    task: string;
    created_at: string;
    completed_by: string | null;
    completed_at: string | null;
    task_relations_id: string;
    order_idx?: number | undefined;
}>, {
    id: string;
    task: string;
    created_at: string;
    completed_by: string | null;
    completed_at: string | null;
    task_relations_id: string;
    order_idx: number;
}, {
    id: string;
    task: string;
    created_at: string;
    completed_by: string | null;
    completed_at: string | null;
    task_relations_id: string;
    order_idx?: number | undefined;
}>;
//# sourceMappingURL=task.d.ts.map
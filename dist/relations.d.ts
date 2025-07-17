import z from 'zod';
export declare const baseTaskSchema: z.ZodObject<{
    id: z.ZodString;
    task: z.ZodString;
    created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
    completed_by: z.ZodNullable<z.ZodString>;
    completed_at: z.ZodEffects<z.ZodNullable<z.ZodDate>, Date | null, unknown>;
    task_relations_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    task: string;
    created_at: Date;
    completed_by: string | null;
    completed_at: Date | null;
    task_relations_id: string;
}, {
    id: string;
    task: string;
    completed_by: string | null;
    task_relations_id: string;
    created_at?: unknown;
    completed_at?: unknown;
}>;
export declare const TaskSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    task: z.ZodString;
    created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
    completed_by: z.ZodNullable<z.ZodString>;
    completed_at: z.ZodEffects<z.ZodNullable<z.ZodDate>, Date | null, unknown>;
    task_relations_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    task: string;
    created_at: Date;
    completed_by: string | null;
    completed_at: Date | null;
    task_relations_id: string;
}, {
    id: string;
    task: string;
    completed_by: string | null;
    task_relations_id: string;
    created_at?: unknown;
    completed_at?: unknown;
}>, {
    id: string;
    task: string;
    created_at: Date;
    completed_by: string | null;
    completed_at: Date | null;
    task_relations_id: string;
}, {
    id: string;
    task: string;
    completed_by: string | null;
    task_relations_id: string;
    created_at?: unknown;
    completed_at?: unknown;
}>;
export declare const baseModifyTaskSchema: z.ZodEffects<z.ZodObject<{
    completed_at: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodDate>>, Date | null | undefined, unknown>;
    completed_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    task: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: Date | null | undefined;
}, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: unknown;
}>, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: Date | null | undefined;
}, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: unknown;
}>;
export declare const newTaskSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    task: z.ZodString;
    created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
    completed_by: z.ZodNullable<z.ZodString>;
    completed_at: z.ZodEffects<z.ZodNullable<z.ZodDate>, Date | null, unknown>;
    task_relations_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    task: string;
    created_at: Date;
    completed_by: string | null;
    completed_at: Date | null;
    task_relations_id: string;
}, {
    id: string;
    task: string;
    completed_by: string | null;
    task_relations_id: string;
    created_at?: unknown;
    completed_at?: unknown;
}>, {
    id: string;
    task: string;
    created_at: Date;
    completed_by: string | null;
    completed_at: Date | null;
    task_relations_id: string;
}, {
    id: string;
    task: string;
    completed_by: string | null;
    task_relations_id: string;
    created_at?: unknown;
    completed_at?: unknown;
}>, {
    created_at: Date;
    id: string;
    task: string;
    completed_by: string | null;
    completed_at: Date | null;
    task_relations_id: string;
}, {
    id: string;
    task: string;
    completed_by: string | null;
    task_relations_id: string;
    created_at?: unknown;
    completed_at?: unknown;
}>;
export declare const patchTaskSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    completed_at: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodDate>>, Date | null | undefined, unknown>;
    completed_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    task: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: Date | null | undefined;
}, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: unknown;
}>, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: Date | null | undefined;
}, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: unknown;
}>, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: Date | null | undefined;
}, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: unknown;
}>;
export declare const editTaskSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    task: z.ZodString;
    created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
    completed_by: z.ZodNullable<z.ZodString>;
    completed_at: z.ZodEffects<z.ZodNullable<z.ZodDate>, Date | null, unknown>;
    task_relations_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    task: string;
    created_at: Date;
    completed_by: string | null;
    completed_at: Date | null;
    task_relations_id: string;
}, {
    id: string;
    task: string;
    completed_by: string | null;
    task_relations_id: string;
    created_at?: unknown;
    completed_at?: unknown;
}>, {
    id: string;
    task: string;
    created_at: Date;
    completed_by: string | null;
    completed_at: Date | null;
    task_relations_id: string;
}, {
    id: string;
    task: string;
    completed_by: string | null;
    task_relations_id: string;
    created_at?: unknown;
    completed_at?: unknown;
}>;
export declare const TaskRelationsBasicSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    relation_location: z.ZodDefault<z.ZodString>;
    created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: Date;
    relation_location: string;
}, {
    name: string;
    id: string;
    created_at?: unknown;
    relation_location?: string | undefined;
}>;
export type TaskRelationsBasicType = z.infer<typeof TaskRelationsBasicSchema>;
export declare const TaskRelationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    relation_location: z.ZodDefault<z.ZodString>;
    created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
} & {
    tasks: z.ZodArray<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        task: z.ZodString;
        created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
        completed_by: z.ZodNullable<z.ZodString>;
        completed_at: z.ZodEffects<z.ZodNullable<z.ZodDate>, Date | null, unknown>;
        task_relations_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        task: string;
        created_at: Date;
        completed_by: string | null;
        completed_at: Date | null;
        task_relations_id: string;
    }, {
        id: string;
        task: string;
        completed_by: string | null;
        task_relations_id: string;
        created_at?: unknown;
        completed_at?: unknown;
    }>, {
        id: string;
        task: string;
        created_at: Date;
        completed_by: string | null;
        completed_at: Date | null;
        task_relations_id: string;
    }, {
        id: string;
        task: string;
        completed_by: string | null;
        task_relations_id: string;
        created_at?: unknown;
        completed_at?: unknown;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: Date;
    relation_location: string;
    tasks: {
        id: string;
        task: string;
        created_at: Date;
        completed_by: string | null;
        completed_at: Date | null;
        task_relations_id: string;
    }[];
}, {
    name: string;
    id: string;
    tasks: {
        id: string;
        task: string;
        completed_by: string | null;
        task_relations_id: string;
        created_at?: unknown;
        completed_at?: unknown;
    }[];
    created_at?: unknown;
    relation_location?: string | undefined;
}>;
export declare const newTaskRelationSchema: z.ZodEffects<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    relation_location: z.ZodDefault<z.ZodString>;
    created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
} & {
    tasks: z.ZodArray<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        task: z.ZodString;
        created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
        completed_by: z.ZodNullable<z.ZodString>;
        completed_at: z.ZodEffects<z.ZodNullable<z.ZodDate>, Date | null, unknown>;
        task_relations_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        task: string;
        created_at: Date;
        completed_by: string | null;
        completed_at: Date | null;
        task_relations_id: string;
    }, {
        id: string;
        task: string;
        completed_by: string | null;
        task_relations_id: string;
        created_at?: unknown;
        completed_at?: unknown;
    }>, {
        id: string;
        task: string;
        created_at: Date;
        completed_by: string | null;
        completed_at: Date | null;
        task_relations_id: string;
    }, {
        id: string;
        task: string;
        completed_by: string | null;
        task_relations_id: string;
        created_at?: unknown;
        completed_at?: unknown;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: Date;
    relation_location: string;
    tasks: {
        id: string;
        task: string;
        created_at: Date;
        completed_by: string | null;
        completed_at: Date | null;
        task_relations_id: string;
    }[];
}, {
    name: string;
    id: string;
    tasks: {
        id: string;
        task: string;
        completed_by: string | null;
        task_relations_id: string;
        created_at?: unknown;
        completed_at?: unknown;
    }[];
    created_at?: unknown;
    relation_location?: string | undefined;
}>, {
    created_at: Date;
    name: string;
    id: string;
    relation_location: string;
    tasks: {
        id: string;
        task: string;
        created_at: Date;
        completed_by: string | null;
        completed_at: Date | null;
        task_relations_id: string;
    }[];
}, {
    name: string;
    id: string;
    tasks: {
        id: string;
        task: string;
        completed_by: string | null;
        task_relations_id: string;
        created_at?: unknown;
        completed_at?: unknown;
    }[];
    created_at?: unknown;
    relation_location?: string | undefined;
}>;
export declare const getRelationsSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    relation_location: z.ZodDefault<z.ZodString>;
    created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
} & {
    my_permission: z.ZodString;
    shared_with_id: z.ZodString;
    shared_with_name: z.ZodString;
    shared_with_email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: Date;
    relation_location: string;
    my_permission: string;
    shared_with_id: string;
    shared_with_name: string;
    shared_with_email: string;
}, {
    name: string;
    id: string;
    my_permission: string;
    shared_with_id: string;
    shared_with_name: string;
    shared_with_email: string;
    created_at?: unknown;
    relation_location?: string | undefined;
}>;
export type getRelationsType = z.infer<typeof getRelationsSchema>;
export type TaskRelationType = z.infer<typeof TaskRelationSchema>;
export type TaskType = z.infer<typeof TaskSchema>;
export declare const permissionSchema: z.ZodObject<{
    permission: z.ZodEnum<["owner", "edit"]>;
}, "strip", z.ZodTypeAny, {
    permission: "owner" | "edit";
}, {
    permission: "owner" | "edit";
}>;
export type PermissionType = z.infer<typeof permissionSchema>;
export declare const postRelationAndShareWithUserRequestSchema: z.ZodObject<{
    task_relations: z.ZodArray<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        relation_location: z.ZodDefault<z.ZodString>;
        created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
    } & {
        tasks: z.ZodArray<z.ZodEffects<z.ZodObject<{
            id: z.ZodString;
            task: z.ZodString;
            created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
            completed_by: z.ZodNullable<z.ZodString>;
            completed_at: z.ZodEffects<z.ZodNullable<z.ZodDate>, Date | null, unknown>;
            task_relations_id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            task: string;
            created_at: Date;
            completed_by: string | null;
            completed_at: Date | null;
            task_relations_id: string;
        }, {
            id: string;
            task: string;
            completed_by: string | null;
            task_relations_id: string;
            created_at?: unknown;
            completed_at?: unknown;
        }>, {
            id: string;
            task: string;
            created_at: Date;
            completed_by: string | null;
            completed_at: Date | null;
            task_relations_id: string;
        }, {
            id: string;
            task: string;
            completed_by: string | null;
            task_relations_id: string;
            created_at?: unknown;
            completed_at?: unknown;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        created_at: Date;
        relation_location: string;
        tasks: {
            id: string;
            task: string;
            created_at: Date;
            completed_by: string | null;
            completed_at: Date | null;
            task_relations_id: string;
        }[];
    }, {
        name: string;
        id: string;
        tasks: {
            id: string;
            task: string;
            completed_by: string | null;
            task_relations_id: string;
            created_at?: unknown;
            completed_at?: unknown;
        }[];
        created_at?: unknown;
        relation_location?: string | undefined;
    }>, {
        created_at: Date;
        name: string;
        id: string;
        relation_location: string;
        tasks: {
            id: string;
            task: string;
            created_at: Date;
            completed_by: string | null;
            completed_at: Date | null;
            task_relations_id: string;
        }[];
    }, {
        name: string;
        id: string;
        tasks: {
            id: string;
            task: string;
            completed_by: string | null;
            task_relations_id: string;
            created_at?: unknown;
            completed_at?: unknown;
        }[];
        created_at?: unknown;
        relation_location?: string | undefined;
    }>, "many">;
    user_shared_with: z.ZodString;
}, "strip", z.ZodTypeAny, {
    task_relations: {
        created_at: Date;
        name: string;
        id: string;
        relation_location: string;
        tasks: {
            id: string;
            task: string;
            created_at: Date;
            completed_by: string | null;
            completed_at: Date | null;
            task_relations_id: string;
        }[];
    }[];
    user_shared_with: string;
}, {
    task_relations: {
        name: string;
        id: string;
        tasks: {
            id: string;
            task: string;
            completed_by: string | null;
            task_relations_id: string;
            created_at?: unknown;
            completed_at?: unknown;
        }[];
        created_at?: unknown;
        relation_location?: string | undefined;
    }[];
    user_shared_with: string;
}>;
export declare const postTaskToRelationReqSchema: z.ZodObject<{
    task: z.ZodObject<Omit<{
        id: z.ZodString;
        task: z.ZodString;
        created_at: z.ZodEffects<z.ZodDate, Date, unknown>;
        completed_by: z.ZodNullable<z.ZodString>;
        completed_at: z.ZodEffects<z.ZodNullable<z.ZodDate>, Date | null, unknown>;
        task_relations_id: z.ZodString;
    }, "id">, "strip", z.ZodTypeAny, {
        task: string;
        created_at: Date;
        completed_by: string | null;
        completed_at: Date | null;
        task_relations_id: string;
    }, {
        task: string;
        completed_by: string | null;
        task_relations_id: string;
        created_at?: unknown;
        completed_at?: unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    task: {
        task: string;
        created_at: Date;
        completed_by: string | null;
        completed_at: Date | null;
        task_relations_id: string;
    };
}, {
    task: {
        task: string;
        completed_by: string | null;
        task_relations_id: string;
        created_at?: unknown;
        completed_at?: unknown;
    };
}>;
export declare const shareRelationWithUserReqSchema: z.ZodObject<{
    task_relations_id: z.ZodString;
    user_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    task_relations_id: string;
    user_id: string;
}, {
    task_relations_id: string;
    user_id: string;
}>;
export declare const editRelationsTaskByIdReqParamsSchema: z.ZodObject<{
    relation_id: z.ZodString;
    task_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    relation_id: string;
    task_id: string;
}, {
    relation_id: string;
    task_id: string;
}>;
export declare const editRelationsTaskByIdReqBodySchema: z.ZodObject<{
    task: z.ZodOptional<z.ZodString>;
    completed_by: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    completed_at: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodDate>, Date | null, unknown>>;
}, "strip", z.ZodTypeAny, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: Date | null | undefined;
}, {
    task?: string | undefined;
    completed_by?: string | null | undefined;
    completed_at?: unknown;
}>;
export declare const removeTaskFromRelationReqParams: z.ZodObject<{
    relation_id: z.ZodString;
    task_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    relation_id: string;
    task_id: string;
}, {
    relation_id: string;
    task_id: string;
}>;
export declare const getRelationsByIdReqParams: z.ZodObject<{
    relation_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    relation_id: string;
}, {
    relation_id: string;
}>;
export declare const getRelationByIdQueryResponseSchema: z.ZodObject<{
    relation_id: z.ZodString;
    relation_name: z.ZodString;
    relation_created_at: z.ZodString;
    relation_location: z.ZodDefault<z.ZodString>;
    task_id: z.ZodString;
    task_task: z.ZodString;
    task_created_at: z.ZodString;
    task_completed_by: z.ZodNullable<z.ZodString>;
    task_completed_at: z.ZodString;
    task_relations_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    task_relations_id: string;
    relation_location: string;
    relation_id: string;
    task_id: string;
    relation_name: string;
    relation_created_at: string;
    task_task: string;
    task_created_at: string;
    task_completed_by: string | null;
    task_completed_at: string;
}, {
    task_relations_id: string;
    relation_id: string;
    task_id: string;
    relation_name: string;
    relation_created_at: string;
    task_task: string;
    task_created_at: string;
    task_completed_by: string | null;
    task_completed_at: string;
    relation_location?: string | undefined;
}>;
export type getRelationByIdQueryResponseType = z.infer<typeof getRelationByIdQueryResponseSchema>;
export declare const deleteRelationParamsSchema: z.ZodObject<{
    relation_id: z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>;
}, "strip", z.ZodTypeAny, {
    relation_id: string | string[];
}, {
    relation_id: string | string[];
}>;
export type deleteRelationParamsType = z.infer<typeof deleteRelationParamsSchema>;
export declare const editRelationNameBodySchema: z.ZodObject<{
    relation_id: z.ZodString;
    new_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    relation_id: string;
    new_name: string;
}, {
    relation_id: string;
    new_name: string;
}>;
//# sourceMappingURL=relations.d.ts.map
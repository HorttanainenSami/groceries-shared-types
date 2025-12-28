import z from 'zod';
export declare const getRelationsResponseSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    created_at: z.ZodString;
} & {
    relation_location: z.ZodLiteral<"Server">;
    permission: z.ZodEnum<["owner", "edit"]>;
    shared_with: z.ZodArray<z.ZodObject<Omit<{
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
    }>, "many">;
} & {
    my_permission: z.ZodString;
    shared_with_id: z.ZodString;
    shared_with_name: z.ZodString;
    shared_with_email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: string;
    permission: "owner" | "edit";
    relation_location: "Server";
    shared_with: {
        name: string;
        email: string;
        id: string;
    }[];
    my_permission: string;
    shared_with_id: string;
    shared_with_name: string;
    shared_with_email: string;
}, {
    name: string;
    id: string;
    created_at: string;
    permission: "owner" | "edit";
    relation_location: "Server";
    shared_with: {
        name: string;
        email: string;
        id: string;
    }[];
    my_permission: string;
    shared_with_id: string;
    shared_with_name: string;
    shared_with_email: string;
}>;
export type GetRelationsResponseType = z.infer<typeof getRelationsResponseSchema>;
export declare const postRelationAndShareWithUserRequestSchema: z.ZodObject<{
    task_relations: z.ZodArray<z.ZodDiscriminatedUnion<"relation_location", [z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        created_at: z.ZodString;
    } & {
        relation_location: z.ZodLiteral<"Local">;
    } & {
        tasks: z.ZodArray<z.ZodEffects<z.ZodObject<{
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
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        created_at: string;
        relation_location: "Local";
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx: number;
        }[];
    }, {
        name: string;
        id: string;
        created_at: string;
        relation_location: "Local";
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx?: number | undefined;
        }[];
    }>, z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        created_at: z.ZodString;
    } & {
        relation_location: z.ZodLiteral<"Server">;
        permission: z.ZodEnum<["owner", "edit"]>;
        shared_with: z.ZodArray<z.ZodObject<Omit<{
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
        }>, "many">;
    } & {
        tasks: z.ZodArray<z.ZodEffects<z.ZodObject<{
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
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        created_at: string;
        permission: "owner" | "edit";
        relation_location: "Server";
        shared_with: {
            name: string;
            email: string;
            id: string;
        }[];
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx: number;
        }[];
    }, {
        name: string;
        id: string;
        created_at: string;
        permission: "owner" | "edit";
        relation_location: "Server";
        shared_with: {
            name: string;
            email: string;
            id: string;
        }[];
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx?: number | undefined;
        }[];
    }>]>, "many">;
    user_shared_with: z.ZodString;
}, "strip", z.ZodTypeAny, {
    task_relations: ({
        name: string;
        id: string;
        created_at: string;
        relation_location: "Local";
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx: number;
        }[];
    } | {
        name: string;
        id: string;
        created_at: string;
        permission: "owner" | "edit";
        relation_location: "Server";
        shared_with: {
            name: string;
            email: string;
            id: string;
        }[];
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx: number;
        }[];
    })[];
    user_shared_with: string;
}, {
    task_relations: ({
        name: string;
        id: string;
        created_at: string;
        relation_location: "Local";
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx?: number | undefined;
        }[];
    } | {
        name: string;
        id: string;
        created_at: string;
        permission: "owner" | "edit";
        relation_location: "Server";
        shared_with: {
            name: string;
            email: string;
            id: string;
        }[];
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx?: number | undefined;
        }[];
    })[];
    user_shared_with: string;
}>;
export declare const deleteRelationParamsSchema: z.ZodUnion<[z.ZodArray<z.ZodObject<Pick<{
    id: z.ZodString;
    name: z.ZodString;
    created_at: z.ZodString;
} & {
    relation_location: z.ZodLiteral<"Server">;
    permission: z.ZodEnum<["owner", "edit"]>;
    shared_with: z.ZodArray<z.ZodObject<Omit<{
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
    }>, "many">;
}, "id">, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>, "many">, z.ZodObject<Pick<{
    id: z.ZodString;
    name: z.ZodString;
    created_at: z.ZodString;
} & {
    relation_location: z.ZodLiteral<"Server">;
    permission: z.ZodEnum<["owner", "edit"]>;
    shared_with: z.ZodArray<z.ZodObject<Omit<{
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
    }>, "many">;
}, "id">, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>]>;
export type DeleteRelationParamsType = z.infer<typeof deleteRelationParamsSchema>;
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
export declare const socketRelationChangeNamePayload: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
}, {
    name: string;
    id: string;
}>;
export declare const createAndShareRelationsSchema: z.ZodObject<{
    relationsWithTasks: z.ZodArray<z.ZodDiscriminatedUnion<"relation_location", [z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        created_at: z.ZodString;
    } & {
        relation_location: z.ZodLiteral<"Local">;
    } & {
        tasks: z.ZodArray<z.ZodEffects<z.ZodObject<{
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
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        created_at: string;
        relation_location: "Local";
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx: number;
        }[];
    }, {
        name: string;
        id: string;
        created_at: string;
        relation_location: "Local";
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx?: number | undefined;
        }[];
    }>, z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        created_at: z.ZodString;
    } & {
        relation_location: z.ZodLiteral<"Server">;
        permission: z.ZodEnum<["owner", "edit"]>;
        shared_with: z.ZodArray<z.ZodObject<Omit<{
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
        }>, "many">;
    } & {
        tasks: z.ZodArray<z.ZodEffects<z.ZodObject<{
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
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        created_at: string;
        permission: "owner" | "edit";
        relation_location: "Server";
        shared_with: {
            name: string;
            email: string;
            id: string;
        }[];
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx: number;
        }[];
    }, {
        name: string;
        id: string;
        created_at: string;
        permission: "owner" | "edit";
        relation_location: "Server";
        shared_with: {
            name: string;
            email: string;
            id: string;
        }[];
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx?: number | undefined;
        }[];
    }>]>, "many">;
    userSharedWith: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    relationsWithTasks: ({
        name: string;
        id: string;
        created_at: string;
        relation_location: "Local";
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx: number;
        }[];
    } | {
        name: string;
        id: string;
        created_at: string;
        permission: "owner" | "edit";
        relation_location: "Server";
        shared_with: {
            name: string;
            email: string;
            id: string;
        }[];
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx: number;
        }[];
    })[];
    userSharedWith: string;
}, {
    id: string;
    relationsWithTasks: ({
        name: string;
        id: string;
        created_at: string;
        relation_location: "Local";
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx?: number | undefined;
        }[];
    } | {
        name: string;
        id: string;
        created_at: string;
        permission: "owner" | "edit";
        relation_location: "Server";
        shared_with: {
            name: string;
            email: string;
            id: string;
        }[];
        tasks: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            order_idx?: number | undefined;
        }[];
    })[];
    userSharedWith: string;
}>;
export type createAndShareRelationsType = z.infer<typeof createAndShareRelationsSchema>;
export declare const getRelationsByIdPropsSchema: z.ZodObject<{
    userId: z.ZodObject<Pick<{
        name: z.ZodString;
        email: z.ZodString;
        password: z.ZodString;
        id: z.ZodString;
    }, "id">, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    relationId: z.ZodObject<Pick<{
        id: z.ZodString;
        name: z.ZodString;
        created_at: z.ZodString;
    } & {
        relation_location: z.ZodLiteral<"Server">;
        permission: z.ZodEnum<["owner", "edit"]>;
        shared_with: z.ZodArray<z.ZodObject<Omit<{
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
        }>, "many">;
    }, "id">, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
}, "strip", z.ZodTypeAny, {
    userId: {
        id: string;
    };
    relationId: {
        id: string;
    };
}, {
    userId: {
        id: string;
    };
    relationId: {
        id: string;
    };
}>;
export type getRelationsByIdProps = z.infer<typeof getRelationsByIdPropsSchema>;
//# sourceMappingURL=relationsApi.d.ts.map
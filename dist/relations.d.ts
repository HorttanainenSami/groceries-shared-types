import z from 'zod';
export declare const permissionEnum: z.ZodEnum<["owner", "edit"]>;
export type PermissionEnumType = z.infer<typeof permissionEnum>;
export declare const permissionSchema: z.ZodObject<{
    permission: z.ZodEnum<["owner", "edit"]>;
}, "strip", z.ZodTypeAny, {
    permission: "owner" | "edit";
}, {
    permission: "owner" | "edit";
}>;
export type PermissionType = z.infer<typeof permissionSchema>;
export declare const relation_location: z.ZodUnion<[z.ZodLiteral<"Local">, z.ZodLiteral<"Server">]>;
export declare const BasicRelationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    relation_location: z.ZodUnion<[z.ZodLiteral<"Local">, z.ZodLiteral<"Server">]>;
    created_at: z.ZodString;
    last_modified: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    relation_location: "Local" | "Server";
}, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    relation_location: "Local" | "Server";
}>;
export declare const ServerRelationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    created_at: z.ZodString;
    last_modified: z.ZodString;
} & {
    relation_location: z.ZodLiteral<"Server">;
    permission: z.ZodEnum<["owner", "edit"]>;
    shared_with: z.ZodNullable<z.ZodArray<z.ZodObject<Omit<{
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
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    permission: "owner" | "edit";
    relation_location: "Server";
    shared_with: {
        name: string;
        email: string;
        id: string;
    }[] | null;
}, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    permission: "owner" | "edit";
    relation_location: "Server";
    shared_with: {
        name: string;
        email: string;
        id: string;
    }[] | null;
}>;
export type ServerRelationType = z.infer<typeof ServerRelationSchema>;
export declare const LocalRelationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    created_at: z.ZodString;
    last_modified: z.ZodString;
} & {
    relation_location: z.ZodLiteral<"Local">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    relation_location: "Local";
}, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    relation_location: "Local";
}>;
export type LocalRelationType = z.infer<typeof LocalRelationSchema>;
export declare const LocalRelationWithTasksSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    created_at: z.ZodString;
    last_modified: z.ZodString;
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
        last_modified: z.ZodString;
        order_idx: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }>, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    relation_location: "Local";
    tasks: {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }[];
}, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    relation_location: "Local";
    tasks: {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }[];
}>;
export type LocalRelationWithTasksType = z.infer<typeof LocalRelationWithTasksSchema>;
export declare const ServerRelationWithTasksSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    created_at: z.ZodString;
    last_modified: z.ZodString;
} & {
    relation_location: z.ZodLiteral<"Server">;
    permission: z.ZodEnum<["owner", "edit"]>;
    shared_with: z.ZodNullable<z.ZodArray<z.ZodObject<Omit<{
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
    }>, "many">>;
} & {
    tasks: z.ZodArray<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        task: z.ZodString;
        created_at: z.ZodString;
        completed_by: z.ZodNullable<z.ZodString>;
        completed_at: z.ZodNullable<z.ZodString>;
        task_relations_id: z.ZodString;
        last_modified: z.ZodString;
        order_idx: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }>, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    permission: "owner" | "edit";
    relation_location: "Server";
    shared_with: {
        name: string;
        email: string;
        id: string;
    }[] | null;
    tasks: {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }[];
}, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    permission: "owner" | "edit";
    relation_location: "Server";
    shared_with: {
        name: string;
        email: string;
        id: string;
    }[] | null;
    tasks: {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }[];
}>;
export type ServerRelationWithTasksType = z.infer<typeof ServerRelationWithTasksSchema>;
export declare const RelationWithTasksSchema: z.ZodDiscriminatedUnion<"relation_location", [z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    created_at: z.ZodString;
    last_modified: z.ZodString;
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
        last_modified: z.ZodString;
        order_idx: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }>, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    relation_location: "Local";
    tasks: {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }[];
}, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    relation_location: "Local";
    tasks: {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }[];
}>, z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    created_at: z.ZodString;
    last_modified: z.ZodString;
} & {
    relation_location: z.ZodLiteral<"Server">;
    permission: z.ZodEnum<["owner", "edit"]>;
    shared_with: z.ZodNullable<z.ZodArray<z.ZodObject<Omit<{
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
    }>, "many">>;
} & {
    tasks: z.ZodArray<z.ZodEffects<z.ZodObject<{
        id: z.ZodString;
        task: z.ZodString;
        created_at: z.ZodString;
        completed_by: z.ZodNullable<z.ZodString>;
        completed_at: z.ZodNullable<z.ZodString>;
        task_relations_id: z.ZodString;
        last_modified: z.ZodString;
        order_idx: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }>, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }, {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    permission: "owner" | "edit";
    relation_location: "Server";
    shared_with: {
        name: string;
        email: string;
        id: string;
    }[] | null;
    tasks: {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }[];
}, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    permission: "owner" | "edit";
    relation_location: "Server";
    shared_with: {
        name: string;
        email: string;
        id: string;
    }[] | null;
    tasks: {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }[];
}>]>;
export type RelationWithTasksType = z.infer<typeof RelationWithTasksSchema>;
export declare const RelationSchema: z.ZodDiscriminatedUnion<"relation_location", [z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    created_at: z.ZodString;
    last_modified: z.ZodString;
} & {
    relation_location: z.ZodLiteral<"Local">;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    relation_location: "Local";
}, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    relation_location: "Local";
}>, z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    created_at: z.ZodString;
    last_modified: z.ZodString;
} & {
    relation_location: z.ZodLiteral<"Server">;
    permission: z.ZodEnum<["owner", "edit"]>;
    shared_with: z.ZodNullable<z.ZodArray<z.ZodObject<Omit<{
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
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    permission: "owner" | "edit";
    relation_location: "Server";
    shared_with: {
        name: string;
        email: string;
        id: string;
    }[] | null;
}, {
    name: string;
    id: string;
    created_at: string;
    last_modified: string;
    permission: "owner" | "edit";
    relation_location: "Server";
    shared_with: {
        name: string;
        email: string;
        id: string;
    }[] | null;
}>]>;
export type RelationType = z.infer<typeof RelationSchema>;
//# sourceMappingURL=relations.d.ts.map
import z from 'zod';
export declare const PendingTypeEnum: z.ZodEnum<["relation-edit", "relation-reorder", "relation-delete", "task-create", "task-edit", "task-delete", "task-reorder", "task-toggle"]>;
export type PendingType = z.infer<typeof PendingTypeEnum>;
export declare const PendingOperationSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<["task-create"]>;
    data: z.ZodObject<{
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
    }>;
    timestamp: z.ZodString;
    retryCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "task-create";
    data: {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    };
    timestamp: string;
    retryCount: number;
}, {
    id: string;
    type: "task-create";
    data: {
        id: string;
        task: string;
        created_at: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    };
    timestamp: string;
    retryCount: number;
}>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<["task-edit"]>;
    data: z.ZodObject<Pick<{
        id: z.ZodString;
        task: z.ZodString;
        created_at: z.ZodString;
        completed_by: z.ZodNullable<z.ZodString>;
        completed_at: z.ZodNullable<z.ZodString>;
        task_relations_id: z.ZodString;
        last_modified: z.ZodString;
        order_idx: z.ZodDefault<z.ZodNumber>;
    }, "id" | "task" | "completed_by" | "completed_at" | "task_relations_id" | "last_modified">, "strip", z.ZodTypeAny, {
        id: string;
        task: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
    }, {
        id: string;
        task: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
    }>;
    timestamp: z.ZodString;
    retryCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "task-edit";
    data: {
        id: string;
        task: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
    };
    timestamp: string;
    retryCount: number;
}, {
    id: string;
    type: "task-edit";
    data: {
        id: string;
        task: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
    };
    timestamp: string;
    retryCount: number;
}>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<["task-delete"]>;
    data: z.ZodObject<Pick<{
        id: z.ZodString;
        task: z.ZodString;
        created_at: z.ZodString;
        completed_by: z.ZodNullable<z.ZodString>;
        completed_at: z.ZodNullable<z.ZodString>;
        task_relations_id: z.ZodString;
        last_modified: z.ZodString;
        order_idx: z.ZodDefault<z.ZodNumber>;
    }, "id" | "task_relations_id" | "last_modified">, "strip", z.ZodTypeAny, {
        id: string;
        task_relations_id: string;
        last_modified: string;
    }, {
        id: string;
        task_relations_id: string;
        last_modified: string;
    }>;
    timestamp: z.ZodString;
    retryCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "task-delete";
    data: {
        id: string;
        task_relations_id: string;
        last_modified: string;
    };
    timestamp: string;
    retryCount: number;
}, {
    id: string;
    type: "task-delete";
    data: {
        id: string;
        task_relations_id: string;
        last_modified: string;
    };
    timestamp: string;
    retryCount: number;
}>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<["task-reorder"]>;
    data: z.ZodArray<z.ZodObject<Pick<{
        id: z.ZodString;
        task: z.ZodString;
        created_at: z.ZodString;
        completed_by: z.ZodNullable<z.ZodString>;
        completed_at: z.ZodNullable<z.ZodString>;
        task_relations_id: z.ZodString;
        last_modified: z.ZodString;
        order_idx: z.ZodDefault<z.ZodNumber>;
    }, "id" | "task_relations_id" | "last_modified" | "order_idx">, "strip", z.ZodTypeAny, {
        id: string;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }, {
        id: string;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }>, "many">;
    timestamp: z.ZodString;
    retryCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "task-reorder";
    data: {
        id: string;
        task_relations_id: string;
        last_modified: string;
        order_idx: number;
    }[];
    timestamp: string;
    retryCount: number;
}, {
    id: string;
    type: "task-reorder";
    data: {
        id: string;
        task_relations_id: string;
        last_modified: string;
        order_idx?: number | undefined;
    }[];
    timestamp: string;
    retryCount: number;
}>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<["task-toggle"]>;
    data: z.ZodObject<Pick<{
        id: z.ZodString;
        task: z.ZodString;
        created_at: z.ZodString;
        completed_by: z.ZodNullable<z.ZodString>;
        completed_at: z.ZodNullable<z.ZodString>;
        task_relations_id: z.ZodString;
        last_modified: z.ZodString;
        order_idx: z.ZodDefault<z.ZodNumber>;
    }, "id" | "completed_by" | "completed_at" | "task_relations_id" | "last_modified">, "strip", z.ZodTypeAny, {
        id: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
    }, {
        id: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
    }>;
    timestamp: z.ZodString;
    retryCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "task-toggle";
    data: {
        id: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
    };
    timestamp: string;
    retryCount: number;
}, {
    id: string;
    type: "task-toggle";
    data: {
        id: string;
        completed_by: string | null;
        completed_at: string | null;
        task_relations_id: string;
        last_modified: string;
    };
    timestamp: string;
    retryCount: number;
}>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<["relation-reorder", "relation-edit"]>;
    data: z.ZodDiscriminatedUnion<"relation_location", [z.ZodObject<{
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
    timestamp: z.ZodString;
    retryCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "relation-edit" | "relation-reorder";
    data: {
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
    } | {
        name: string;
        id: string;
        created_at: string;
        last_modified: string;
        relation_location: "Local";
    };
    timestamp: string;
    retryCount: number;
}, {
    id: string;
    type: "relation-edit" | "relation-reorder";
    data: {
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
    } | {
        name: string;
        id: string;
        created_at: string;
        last_modified: string;
        relation_location: "Local";
    };
    timestamp: string;
    retryCount: number;
}>, z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<["relation-delete"]>;
    data: z.ZodDiscriminatedUnion<"relation_location", [z.ZodObject<{
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
    timestamp: z.ZodString;
    retryCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "relation-delete";
    data: {
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
    } | {
        name: string;
        id: string;
        created_at: string;
        last_modified: string;
        relation_location: "Local";
    };
    timestamp: string;
    retryCount: number;
}, {
    id: string;
    type: "relation-delete";
    data: {
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
    } | {
        name: string;
        id: string;
        created_at: string;
        last_modified: string;
        relation_location: "Local";
    };
    timestamp: string;
    retryCount: number;
}>]>;
export type PendingOperation = z.infer<typeof PendingOperationSchema>;
export declare const SyncBatchRequestSchema: z.ZodObject<{
    operations: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["task-create"]>;
        data: z.ZodObject<{
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
        }>;
        timestamp: z.ZodString;
        retryCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "task-create";
        data: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
            order_idx: number;
        };
        timestamp: string;
        retryCount: number;
    }, {
        id: string;
        type: "task-create";
        data: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
            order_idx?: number | undefined;
        };
        timestamp: string;
        retryCount: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["task-edit"]>;
        data: z.ZodObject<Pick<{
            id: z.ZodString;
            task: z.ZodString;
            created_at: z.ZodString;
            completed_by: z.ZodNullable<z.ZodString>;
            completed_at: z.ZodNullable<z.ZodString>;
            task_relations_id: z.ZodString;
            last_modified: z.ZodString;
            order_idx: z.ZodDefault<z.ZodNumber>;
        }, "id" | "task" | "completed_by" | "completed_at" | "task_relations_id" | "last_modified">, "strip", z.ZodTypeAny, {
            id: string;
            task: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
        }, {
            id: string;
            task: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
        }>;
        timestamp: z.ZodString;
        retryCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "task-edit";
        data: {
            id: string;
            task: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
        };
        timestamp: string;
        retryCount: number;
    }, {
        id: string;
        type: "task-edit";
        data: {
            id: string;
            task: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
        };
        timestamp: string;
        retryCount: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["task-delete"]>;
        data: z.ZodObject<Pick<{
            id: z.ZodString;
            task: z.ZodString;
            created_at: z.ZodString;
            completed_by: z.ZodNullable<z.ZodString>;
            completed_at: z.ZodNullable<z.ZodString>;
            task_relations_id: z.ZodString;
            last_modified: z.ZodString;
            order_idx: z.ZodDefault<z.ZodNumber>;
        }, "id" | "task_relations_id" | "last_modified">, "strip", z.ZodTypeAny, {
            id: string;
            task_relations_id: string;
            last_modified: string;
        }, {
            id: string;
            task_relations_id: string;
            last_modified: string;
        }>;
        timestamp: z.ZodString;
        retryCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "task-delete";
        data: {
            id: string;
            task_relations_id: string;
            last_modified: string;
        };
        timestamp: string;
        retryCount: number;
    }, {
        id: string;
        type: "task-delete";
        data: {
            id: string;
            task_relations_id: string;
            last_modified: string;
        };
        timestamp: string;
        retryCount: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["task-reorder"]>;
        data: z.ZodArray<z.ZodObject<Pick<{
            id: z.ZodString;
            task: z.ZodString;
            created_at: z.ZodString;
            completed_by: z.ZodNullable<z.ZodString>;
            completed_at: z.ZodNullable<z.ZodString>;
            task_relations_id: z.ZodString;
            last_modified: z.ZodString;
            order_idx: z.ZodDefault<z.ZodNumber>;
        }, "id" | "task_relations_id" | "last_modified" | "order_idx">, "strip", z.ZodTypeAny, {
            id: string;
            task_relations_id: string;
            last_modified: string;
            order_idx: number;
        }, {
            id: string;
            task_relations_id: string;
            last_modified: string;
            order_idx?: number | undefined;
        }>, "many">;
        timestamp: z.ZodString;
        retryCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "task-reorder";
        data: {
            id: string;
            task_relations_id: string;
            last_modified: string;
            order_idx: number;
        }[];
        timestamp: string;
        retryCount: number;
    }, {
        id: string;
        type: "task-reorder";
        data: {
            id: string;
            task_relations_id: string;
            last_modified: string;
            order_idx?: number | undefined;
        }[];
        timestamp: string;
        retryCount: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["task-toggle"]>;
        data: z.ZodObject<Pick<{
            id: z.ZodString;
            task: z.ZodString;
            created_at: z.ZodString;
            completed_by: z.ZodNullable<z.ZodString>;
            completed_at: z.ZodNullable<z.ZodString>;
            task_relations_id: z.ZodString;
            last_modified: z.ZodString;
            order_idx: z.ZodDefault<z.ZodNumber>;
        }, "id" | "completed_by" | "completed_at" | "task_relations_id" | "last_modified">, "strip", z.ZodTypeAny, {
            id: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
        }, {
            id: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
        }>;
        timestamp: z.ZodString;
        retryCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "task-toggle";
        data: {
            id: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
        };
        timestamp: string;
        retryCount: number;
    }, {
        id: string;
        type: "task-toggle";
        data: {
            id: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
        };
        timestamp: string;
        retryCount: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["relation-reorder", "relation-edit"]>;
        data: z.ZodDiscriminatedUnion<"relation_location", [z.ZodObject<{
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
        timestamp: z.ZodString;
        retryCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "relation-edit" | "relation-reorder";
        data: {
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
        } | {
            name: string;
            id: string;
            created_at: string;
            last_modified: string;
            relation_location: "Local";
        };
        timestamp: string;
        retryCount: number;
    }, {
        id: string;
        type: "relation-edit" | "relation-reorder";
        data: {
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
        } | {
            name: string;
            id: string;
            created_at: string;
            last_modified: string;
            relation_location: "Local";
        };
        timestamp: string;
        retryCount: number;
    }>, z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["relation-delete"]>;
        data: z.ZodDiscriminatedUnion<"relation_location", [z.ZodObject<{
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
        timestamp: z.ZodString;
        retryCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "relation-delete";
        data: {
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
        } | {
            name: string;
            id: string;
            created_at: string;
            last_modified: string;
            relation_location: "Local";
        };
        timestamp: string;
        retryCount: number;
    }, {
        id: string;
        type: "relation-delete";
        data: {
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
        } | {
            name: string;
            id: string;
            created_at: string;
            last_modified: string;
            relation_location: "Local";
        };
        timestamp: string;
        retryCount: number;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    operations: ({
        id: string;
        type: "relation-edit" | "relation-reorder";
        data: {
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
        } | {
            name: string;
            id: string;
            created_at: string;
            last_modified: string;
            relation_location: "Local";
        };
        timestamp: string;
        retryCount: number;
    } | {
        id: string;
        type: "relation-delete";
        data: {
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
        } | {
            name: string;
            id: string;
            created_at: string;
            last_modified: string;
            relation_location: "Local";
        };
        timestamp: string;
        retryCount: number;
    } | {
        id: string;
        type: "task-create";
        data: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
            order_idx: number;
        };
        timestamp: string;
        retryCount: number;
    } | {
        id: string;
        type: "task-edit";
        data: {
            id: string;
            task: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
        };
        timestamp: string;
        retryCount: number;
    } | {
        id: string;
        type: "task-toggle";
        data: {
            id: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
        };
        timestamp: string;
        retryCount: number;
    } | {
        id: string;
        type: "task-delete";
        data: {
            id: string;
            task_relations_id: string;
            last_modified: string;
        };
        timestamp: string;
        retryCount: number;
    } | {
        id: string;
        type: "task-reorder";
        data: {
            id: string;
            task_relations_id: string;
            last_modified: string;
            order_idx: number;
        }[];
        timestamp: string;
        retryCount: number;
    })[];
}, {
    operations: ({
        id: string;
        type: "relation-edit" | "relation-reorder";
        data: {
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
        } | {
            name: string;
            id: string;
            created_at: string;
            last_modified: string;
            relation_location: "Local";
        };
        timestamp: string;
        retryCount: number;
    } | {
        id: string;
        type: "relation-delete";
        data: {
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
        } | {
            name: string;
            id: string;
            created_at: string;
            last_modified: string;
            relation_location: "Local";
        };
        timestamp: string;
        retryCount: number;
    } | {
        id: string;
        type: "task-create";
        data: {
            id: string;
            task: string;
            created_at: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
            order_idx?: number | undefined;
        };
        timestamp: string;
        retryCount: number;
    } | {
        id: string;
        type: "task-edit";
        data: {
            id: string;
            task: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
        };
        timestamp: string;
        retryCount: number;
    } | {
        id: string;
        type: "task-toggle";
        data: {
            id: string;
            completed_by: string | null;
            completed_at: string | null;
            task_relations_id: string;
            last_modified: string;
        };
        timestamp: string;
        retryCount: number;
    } | {
        id: string;
        type: "task-delete";
        data: {
            id: string;
            task_relations_id: string;
            last_modified: string;
        };
        timestamp: string;
        retryCount: number;
    } | {
        id: string;
        type: "task-reorder";
        data: {
            id: string;
            task_relations_id: string;
            last_modified: string;
            order_idx?: number | undefined;
        }[];
        timestamp: string;
        retryCount: number;
    })[];
}>;
export type SyncBatchRequest = z.infer<typeof SyncBatchRequestSchema>;
export declare const SyncBatchResponseSchema: z.ZodObject<{
    success: z.ZodArray<z.ZodString, "many">;
    failed: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    success: string[];
    failed: string[];
}, {
    success: string[];
    failed: string[];
}>;
export type SyncBatchResponse = z.infer<typeof SyncBatchResponseSchema>;
export type InsertPendingOperation = Omit<PendingOperation, 'retryCount'> & {
    retryCount?: number;
};
//# sourceMappingURL=syncTypes.d.ts.map
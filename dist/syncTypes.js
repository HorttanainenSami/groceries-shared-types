"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncBatchResponseSchema = exports.FailedOperation = exports.RelationLWWConflictFailed = exports.TaskLWWConflictFailed = exports.BaseFailed = exports.SyncBatchRequestSchema = exports.PendingOperationSchema = exports.PendingTypeEnum = void 0;
const task_1 = require("./task");
const relations_1 = require("./relations");
const zod_1 = __importDefault(require("zod"));
exports.PendingTypeEnum = zod_1.default.enum([
    'relation-edit',
    'relation-reorder',
    'relation-delete',
    'task-create',
    'task-edit',
    'task-delete',
    'task-reorder',
    'task-toggle',
]);
const PendingOperationRelationEditReorderSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    type: zod_1.default.enum([exports.PendingTypeEnum.Enum['relation-reorder'], exports.PendingTypeEnum.Enum['relation-edit']]),
    data: relations_1.RelationSchema,
    timestamp: zod_1.default.string().datetime(),
    retryCount: zod_1.default.number().int().min(0),
});
const PendingOperationRelationDeleteSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    type: exports.PendingTypeEnum.extract(['relation-delete']),
    data: relations_1.RelationSchema,
    timestamp: zod_1.default.string().datetime(),
    retryCount: zod_1.default.number().int().min(0),
});
const PendingOperationTaskCreateSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    type: exports.PendingTypeEnum.extract(['task-create']),
    data: task_1.basicTaskSchema,
    timestamp: zod_1.default.string().datetime(),
    retryCount: zod_1.default.number().int().min(0),
});
const PendingOperationTaskEditSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    type: exports.PendingTypeEnum.extract(['task-edit']),
    data: task_1.basicTaskSchema.pick({
        id: true,
        task_relations_id: true,
        last_modified: true,
        task: true,
        completed_at: true,
        completed_by: true,
    }),
    timestamp: zod_1.default.string().datetime(),
    retryCount: zod_1.default.number().int().min(0),
});
const PendingOperationTaskToggleSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    type: exports.PendingTypeEnum.extract(['task-toggle']),
    data: task_1.basicTaskSchema.pick({
        id: true,
        task_relations_id: true,
        last_modified: true,
        completed_at: true,
        completed_by: true,
    }),
    timestamp: zod_1.default.string().datetime(),
    retryCount: zod_1.default.number().int().min(0),
});
const PendingOperationTaskDeleteSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    type: exports.PendingTypeEnum.extract(['task-delete']),
    data: task_1.basicTaskSchema.pick({ id: true, task_relations_id: true, last_modified: true }),
    timestamp: zod_1.default.string().datetime(),
    retryCount: zod_1.default.number().int().min(0),
});
const PendingOperationTaskReorderSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    type: exports.PendingTypeEnum.extract(['task-reorder']),
    data: task_1.basicTaskSchema
        .pick({ id: true, order_idx: true, task_relations_id: true, last_modified: true })
        .array(),
    timestamp: zod_1.default.string().datetime(),
    retryCount: zod_1.default.number().int().min(0),
});
exports.PendingOperationSchema = zod_1.default.discriminatedUnion('type', [
    PendingOperationTaskCreateSchema,
    PendingOperationTaskEditSchema,
    PendingOperationTaskDeleteSchema,
    PendingOperationTaskReorderSchema,
    PendingOperationTaskToggleSchema,
    PendingOperationRelationEditReorderSchema,
    PendingOperationRelationDeleteSchema,
]);
exports.SyncBatchRequestSchema = zod_1.default.object({
    operations: exports.PendingOperationSchema.array(),
});
exports.BaseFailed = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    reason: zod_1.default.string(),
    type: zod_1.default.literal('simple'),
});
exports.TaskLWWConflictFailed = exports.BaseFailed.extend({
    serverTask: task_1.TaskSchema,
    type: zod_1.default.literal('task'),
});
exports.RelationLWWConflictFailed = exports.BaseFailed.extend({
    serverRelations: relations_1.ServerRelationSchema,
    type: zod_1.default.literal('relation'),
});
exports.FailedOperation = zod_1.default.discriminatedUnion('type', [
    exports.BaseFailed,
    exports.TaskLWWConflictFailed,
    exports.RelationLWWConflictFailed,
]);
exports.SyncBatchResponseSchema = zod_1.default.object({
    success: zod_1.default.object({ id: zod_1.default.string().uuid() }).array(),
    failed: exports.FailedOperation.array(),
});
//# sourceMappingURL=syncTypes.js.map
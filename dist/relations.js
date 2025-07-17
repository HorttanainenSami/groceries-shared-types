"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editRelationNameBodySchema = exports.deleteRelationParamsSchema = exports.getRelationByIdQueryResponseSchema = exports.getRelationsByIdReqParams = exports.removeTaskFromRelationReqParams = exports.editRelationsTaskByIdReqBodySchema = exports.editRelationsTaskByIdReqParamsSchema = exports.shareRelationWithUserReqSchema = exports.postTaskToRelationReqSchema = exports.postRelationAndShareWithUserRequestSchema = exports.permissionSchema = exports.getRelationsSchema = exports.newTaskRelationSchema = exports.TaskRelationSchema = exports.TaskRelationsBasicSchema = exports.editTaskSchema = exports.patchTaskSchema = exports.newTaskSchema = exports.baseModifyTaskSchema = exports.TaskSchema = exports.baseTaskSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const users_1 = require("./users");
const parseDate = (arg) => {
    if (typeof arg === 'string') {
        const date = new Date(arg);
        return isNaN(date.getTime()) ? undefined : date;
    }
    if (arg instanceof Date && !isNaN(arg.getTime()))
        return arg;
    return undefined;
};
const parseNullableDate = (arg) => {
    if (arg === null || arg === 'null')
        return null;
    return parseDate(arg);
};
exports.baseTaskSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    task: zod_1.default.string(),
    created_at: zod_1.default.preprocess(parseDate, zod_1.default.date()),
    completed_by: zod_1.default.string().uuid().nullable(),
    completed_at: zod_1.default.preprocess(parseNullableDate, zod_1.default.date().nullable()),
    task_relations_id: zod_1.default.string().uuid(),
});
exports.TaskSchema = exports.baseTaskSchema.refine((data) => !(data.completed_at && !data.completed_by), {
    message: 'completed_by isnt defined when completed_at is',
    path: ['completed_by'],
});
exports.baseModifyTaskSchema = zod_1.default
    .object({
    completed_at: zod_1.default.preprocess(parseNullableDate, zod_1.default.date().nullable().optional()),
    completed_by: zod_1.default.string().uuid().nullable().optional(),
    task: zod_1.default.string().optional(),
})
    .refine((data) => !(data.completed_at && !data.completed_by), {
    message: 'completed_by isnt defined when completed_at is',
    path: ['completed_by'],
});
exports.newTaskSchema = exports.TaskSchema.transform((data) => ({
    ...data,
    created_at: new Date(),
}));
exports.patchTaskSchema = exports.baseModifyTaskSchema.transform((data) => {
    if (!data.completed_at && !data.completed_by)
        return { ...data, completed_at: null, completed_by: null };
    if (data.completed_by) {
        return { ...data, completed_at: new Date() };
    }
    return { ...data };
});
exports.editTaskSchema = exports.baseTaskSchema.transform((data) => {
    if (!data.completed_at && !data.completed_by) {
        return { ...data, completed_at: null, completed_by: null };
    }
    if (data.completed_by) {
        return { ...data, completed_at: new Date() };
    }
    if (data.completed_at && !data.completed_by) {
        return { ...data, completed_at: null };
    }
    return { ...data };
});
exports.TaskRelationsBasicSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    name: zod_1.default.string(),
    relation_location: zod_1.default.string().default('Server'),
    created_at: zod_1.default.preprocess((arg) => (typeof arg === 'string' ? new Date(arg) : arg), zod_1.default.date(), zod_1.default.date()),
});
exports.TaskRelationSchema = exports.TaskRelationsBasicSchema.extend({
    tasks: exports.TaskSchema.array(),
});
exports.newTaskRelationSchema = exports.TaskRelationSchema.transform((data) => ({
    ...data,
    created_at: new Date(),
}));
exports.getRelationsSchema = exports.TaskRelationsBasicSchema.extend({
    my_permission: zod_1.default.string(),
    shared_with_id: zod_1.default.string().uuid(),
    shared_with_name: zod_1.default.string(),
    shared_with_email: zod_1.default.string().email(),
});
exports.permissionSchema = zod_1.default.object({
    permission: zod_1.default.enum(['owner', 'edit']),
});
exports.postRelationAndShareWithUserRequestSchema = zod_1.default.object({
    task_relations: exports.newTaskRelationSchema.array(),
    user_shared_with: users_1.userSchema.pick({ id: true }).shape.id,
});
exports.postTaskToRelationReqSchema = zod_1.default.object({
    task: exports.baseTaskSchema.omit({ id: true }),
});
exports.shareRelationWithUserReqSchema = zod_1.default.object({
    task_relations_id: exports.TaskRelationSchema.pick({ id: true }).shape.id,
    user_id: users_1.userSchema.pick({ id: true }).shape.id,
});
exports.editRelationsTaskByIdReqParamsSchema = zod_1.default.object({
    relation_id: exports.TaskRelationSchema.pick({ id: true }).shape.id,
    task_id: exports.baseTaskSchema.pick({ id: true }).shape.id,
});
exports.editRelationsTaskByIdReqBodySchema = exports.baseTaskSchema
    .omit({ id: true, task_relations_id: true, created_at: true })
    .partial();
exports.removeTaskFromRelationReqParams = zod_1.default.object({
    relation_id: exports.TaskRelationSchema.pick({ id: true }).shape.id,
    task_id: exports.baseTaskSchema.pick({ id: true }).shape.id,
});
exports.getRelationsByIdReqParams = zod_1.default.object({
    relation_id: exports.TaskRelationSchema.pick({ id: true }).shape.id,
});
exports.getRelationByIdQueryResponseSchema = zod_1.default.object({
    relation_id: zod_1.default.string().uuid(),
    relation_name: zod_1.default.string(),
    relation_created_at: zod_1.default.string().date(),
    relation_location: zod_1.default.string().default('Server'),
    task_id: zod_1.default.string().uuid(),
    task_task: zod_1.default.string(),
    task_created_at: zod_1.default.string().date(),
    task_completed_by: zod_1.default.string().uuid().nullable(),
    task_completed_at: zod_1.default.string().date(),
    task_relations_id: zod_1.default.string().uuid(),
});
exports.deleteRelationParamsSchema = zod_1.default.object({
    relation_id: zod_1.default.string().uuid().or(zod_1.default.string().uuid().array()),
});
exports.editRelationNameBodySchema = zod_1.default.object({
    relation_id: zod_1.default.string().uuid(),
    new_name: zod_1.default.string().min(1, 'Name must be at least 1 character long'),
});
//# sourceMappingURL=relations.js.map
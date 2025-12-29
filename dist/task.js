"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editTaskSchema = exports.patchTaskSchema = exports.baseModifyTaskSchema = exports.TaskSchema = exports.basicTaskSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.basicTaskSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    task: zod_1.default.string(),
    created_at: zod_1.default.string().datetime(),
    completed_by: zod_1.default.string().uuid().nullable(),
    completed_at: zod_1.default.string().datetime().nullable(),
    task_relations_id: zod_1.default.string().uuid(),
    last_modified: zod_1.default.string().datetime(),
    order_idx: zod_1.default.number().default(9999),
});
exports.TaskSchema = exports.basicTaskSchema.refine((data) => !(data.completed_at && !data.completed_by), {
    message: 'completed_by isnt defined when completed_at is',
    path: ['completed_by'],
});
exports.baseModifyTaskSchema = zod_1.default
    .object({
    completed_at: zod_1.default.string().datetime().nullable().optional(),
    completed_by: zod_1.default.string().uuid().nullable().optional(),
    task: zod_1.default.string().optional(),
    order_idx: zod_1.default.number().optional(),
})
    .refine((data) => !(data.completed_at && !data.completed_by), {
    message: 'completed_by isnt defined when completed_at is',
    path: ['completed_by'],
});
exports.patchTaskSchema = exports.baseModifyTaskSchema.transform((data) => {
    if (!data.completed_at && !data.completed_by)
        return { ...data, completed_at: null, completed_by: null };
    if (data.completed_by) {
        return { ...data, completed_at: new Date().toISOString() };
    }
    return { ...data };
});
exports.editTaskSchema = exports.basicTaskSchema.transform((data) => {
    if (!data.completed_at && !data.completed_by) {
        return { ...data, completed_at: null, completed_by: null };
    }
    if (data.completed_by) {
        return { ...data, completed_at: new Date().toISOString() };
    }
    if (data.completed_at && !data.completed_by) {
        return { ...data, completed_at: null };
    }
    return { ...data };
});
//# sourceMappingURL=task.js.map
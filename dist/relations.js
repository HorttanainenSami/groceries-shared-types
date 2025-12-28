"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationSchema = exports.RelationWithTasksSchema = exports.ServerRelationWithTasksSchema = exports.LocalRelationWithTasksSchema = exports.LocalRelationSchema = exports.ServerRelationSchema = exports.BasicRelationSchema = exports.relation_location = exports.permissionSchema = exports.permissionEnum = void 0;
const task_1 = require("./task");
const users_1 = require("./users");
const zod_1 = __importDefault(require("zod"));
exports.permissionEnum = zod_1.default.enum(['owner', 'edit']);
exports.permissionSchema = zod_1.default.object({
    permission: exports.permissionEnum,
});
exports.relation_location = zod_1.default.union([zod_1.default.literal('Local'), zod_1.default.literal('Server')]);
exports.BasicRelationSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    name: zod_1.default.string(),
    relation_location: exports.relation_location,
    created_at: zod_1.default.string().datetime(),
});
exports.ServerRelationSchema = exports.BasicRelationSchema.extend({
    relation_location: zod_1.default.literal('Server'),
    permission: exports.permissionEnum,
    shared_with: users_1.userSchema.omit({ password: true }).array(),
});
exports.LocalRelationSchema = exports.BasicRelationSchema.extend({
    relation_location: zod_1.default.literal('Local'),
});
exports.LocalRelationWithTasksSchema = exports.LocalRelationSchema.extend({
    tasks: task_1.TaskSchema.array(),
});
exports.ServerRelationWithTasksSchema = exports.ServerRelationSchema.extend({
    tasks: task_1.TaskSchema.array(),
});
exports.RelationWithTasksSchema = zod_1.default.discriminatedUnion('relation_location', [exports.LocalRelationWithTasksSchema, exports.ServerRelationWithTasksSchema]);
exports.RelationSchema = zod_1.default.discriminatedUnion('relation_location', [exports.LocalRelationSchema, exports.ServerRelationSchema]);
//# sourceMappingURL=relations.js.map
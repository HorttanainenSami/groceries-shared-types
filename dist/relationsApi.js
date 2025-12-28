"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelationsByIdPropsSchema = exports.createAndShareRelationsSchema = exports.socketRelationChangeNamePayload = exports.editRelationNameBodySchema = exports.deleteRelationParamsSchema = exports.postRelationAndShareWithUserRequestSchema = exports.getRelationsResponseSchema = void 0;
const relations_1 = require("./relations");
const users_1 = require("./users");
const zod_1 = __importDefault(require("zod"));
exports.getRelationsResponseSchema = relations_1.ServerRelationSchema.extend({
    my_permission: zod_1.default.string(),
    shared_with_id: zod_1.default.string().uuid(),
    shared_with_name: zod_1.default.string(),
    shared_with_email: zod_1.default.string().email(),
});
exports.postRelationAndShareWithUserRequestSchema = zod_1.default.object({
    task_relations: relations_1.RelationWithTasksSchema.array(),
    user_shared_with: users_1.userSchema.pick({ id: true }).shape.id,
});
exports.deleteRelationParamsSchema = zod_1.default.union([
    relations_1.ServerRelationSchema.pick({ id: true }).array(),
    relations_1.ServerRelationSchema.pick({ id: true }),
]);
exports.editRelationNameBodySchema = zod_1.default.object({
    relation_id: zod_1.default.string().uuid(),
    new_name: zod_1.default.string().min(1, 'Name must be at least 1 character long'),
});
exports.socketRelationChangeNamePayload = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    name: zod_1.default.string(),
});
exports.createAndShareRelationsSchema = zod_1.default.object({
    relationsWithTasks: relations_1.RelationWithTasksSchema.array(),
    userSharedWith: zod_1.default.string(),
    id: zod_1.default.string(),
});
exports.getRelationsByIdPropsSchema = zod_1.default.object({
    userId: users_1.userSchema.pick({ id: true }),
    relationId: relations_1.ServerRelationSchema.pick({ id: true })
});
//# sourceMappingURL=relationsApi.js.map
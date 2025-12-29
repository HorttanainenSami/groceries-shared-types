import { TaskSchema } from './task';
import { userSchema } from './users';
import z from 'zod';

export const permissionEnum = z.enum(['owner', 'edit']);
export type PermissionEnumType = z.infer<typeof permissionEnum>;
export const permissionSchema = z.object({
  permission: permissionEnum,
});
export type PermissionType = z.infer<typeof permissionSchema>;

export const relation_location = z.union([z.literal('Local'), z.literal('Server')]);

export const BasicRelationSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  relation_location: relation_location,
  created_at: z.string().datetime(),
  last_modified: z.string().datetime(),
});

export const ServerRelationSchema = BasicRelationSchema.extend({
  relation_location: z.literal('Server'),
  permission: permissionEnum,
  shared_with: userSchema.omit({ password: true }).array(),
});
export type ServerRelationType = z.infer<typeof ServerRelationSchema>;

export const LocalRelationSchema = BasicRelationSchema.extend({
  relation_location: z.literal('Local'),
});
export type LocalRelationType = z.infer<typeof LocalRelationSchema>;

export const LocalRelationWithTasksSchema = LocalRelationSchema.extend({
  tasks: TaskSchema.array(),
});
export type LocalRelationWithTasksType = z.infer<typeof LocalRelationWithTasksSchema>;

export const ServerRelationWithTasksSchema = ServerRelationSchema.extend({
  tasks: TaskSchema.array(),
});
export type ServerRelationWithTasksType = z.infer<typeof ServerRelationWithTasksSchema>;

export const RelationWithTasksSchema = z.discriminatedUnion('relation_location', [
  LocalRelationWithTasksSchema,
  ServerRelationWithTasksSchema,
]);
export type RelationWithTasksType = z.infer<typeof RelationWithTasksSchema>;

export const RelationSchema = z.discriminatedUnion('relation_location', [
  LocalRelationSchema,
  ServerRelationSchema,
]);
export type RelationType = z.infer<typeof RelationSchema>;

import { userSchema } from './users';
import z from 'zod';

export const basicTaskSchema = z.object({
  id: z.string().uuid(),
  task: z.string(),
  created_at: z.string().datetime(),
  completed_by: z.string().uuid().nullable(),
  completed_at: z.string().datetime().nullable(),
  task_relations_id: z.string().uuid(),
});

export const TaskSchema = basicTaskSchema.refine(
  (data) => !(data.completed_at && !data.completed_by),
  {
    message: 'completed_by isnt defined when completed_at is',
    path: ['completed_by'],
  }
);
export type TaskType = z.infer<typeof TaskSchema>;

export const baseModifyTaskSchema = z
  .object({
    completed_at: z.string().datetime().nullable().optional(),
    completed_by: z.string().uuid().nullable().optional(),
    task: z.string().optional(),
  })
  .refine((data) => !(data.completed_at && !data.completed_by), {
    message: 'completed_by isnt defined when completed_at is',
    path: ['completed_by'],
  });

export const patchTaskSchema = baseModifyTaskSchema.transform((data) => {
  if (!data.completed_at && !data.completed_by)
    return { ...data, completed_at: null, completed_by: null };
  if (data.completed_by) {
    return { ...data, completed_at: new Date().toISOString() };
  }
  return { ...data };
});
export const editTaskSchema = basicTaskSchema.transform((data) => {
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
  relation_location: relation_location.default('Server'),
  created_at: z.string().datetime(),
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

export const RelationWithTasksSchema = z.discriminatedUnion('relation_location', [LocalRelationWithTasksSchema, ServerRelationWithTasksSchema])
export type RelationWithTasksType = z.infer<typeof RelationWithTasksSchema>;

export const RelationSchema = z.discriminatedUnion('relation_location', [LocalRelationSchema, ServerRelationSchema]);
export type RelationType = z.infer<typeof RelationSchema>;
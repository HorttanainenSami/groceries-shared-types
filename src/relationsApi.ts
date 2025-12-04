import { ServerRelationSchema, BasicRelationWithTasksSchema, BasicRelationSchema } from './relations';
import { userSchema } from './users';
import z from 'zod';


export const getRelationsResponseSchema = ServerRelationSchema.extend({
  my_permission: z.string(),
  shared_with_id: z.string().uuid(),
  shared_with_name: z.string(),
  shared_with_email: z.string().email(),
});

export type getRelationsResponseType = z.infer<typeof getRelationsResponseSchema>;


export const postRelationAndShareWithUserRequestSchema = z.object({
  task_relations: BasicRelationWithTasksSchema.array(),
  user_shared_with: userSchema.pick({ id: true }).shape.id,
});

export const getRelationByIdQueryResponseSchema = z.object({
  relation_id: z.string().uuid(),
  relation_name: z.string(),
  relation_created_at: z.date(),
  relation_location: z.literal('Server'),
  task_id: z.string().uuid(),
  task_task: z.string(),
  task_created_at: z.date(),
  task_completed_by: z.string().uuid().nullable(),
  task_completed_at: z.date().nullable(),
  task_relations_id: z.string().uuid(),
});
export type getRelationByIdQueryResponseType = z.infer<
  typeof getRelationByIdQueryResponseSchema
>;
export const deleteRelationParamsSchema = z.union([
  BasicRelationSchema.pick({ id: true }).array(),
  BasicRelationSchema.pick({ id: true })
]);
export type deleteRelationParamsType = z.infer<
  typeof deleteRelationParamsSchema
>;

export const editRelationNameBodySchema = z.object({
  relation_id: z.string().uuid(),
  new_name: z.string().min(1, 'Name must be at least 1 character long'),
});


export const socketRelationChangeNamePayload = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

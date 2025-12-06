import {
  ServerRelationSchema,
  RelationWithTasksSchema,
} from './relations';
import { userSchema } from './users';
import z from 'zod';

export const getRelationsResponseSchema = ServerRelationSchema.extend({
  my_permission: z.string(),
  shared_with_id: z.string().uuid(),
  shared_with_name: z.string(),
  shared_with_email: z.string().email(),
});

export type GetRelationsResponseType = z.infer<typeof getRelationsResponseSchema>;

export const postRelationAndShareWithUserRequestSchema = z.object({
  task_relations: RelationWithTasksSchema.array(),
  user_shared_with: userSchema.pick({ id: true }).shape.id,
});


export const deleteRelationParamsSchema = z.union([
  ServerRelationSchema.pick({ id: true }).array(),
  ServerRelationSchema.pick({ id: true }),
]);
export type DeleteRelationParamsType = z.infer<typeof deleteRelationParamsSchema>;

export const editRelationNameBodySchema = z.object({
  relation_id: z.string().uuid(),
  new_name: z.string().min(1, 'Name must be at least 1 character long'),
});

export const socketRelationChangeNamePayload = z.object({
  id: z.string().uuid(),
  name: z.string(),
});

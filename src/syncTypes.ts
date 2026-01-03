import { basicTaskSchema } from './task';
import { RelationSchema } from './relations';
import z from 'zod';
export const PendingTypeEnum = z.enum([
  'relation-edit',
  'relation-reorder',
  'relation-delete',
  'task-create',
  'task-edit',
  'task-delete',
  'task-reorder',
  'task-toggle',
]);

// Export TypeScript type
export type PendingType = z.infer<typeof PendingTypeEnum>;
const PendingOperationRelationEditReorderSchema = z.object({
  id: z.string().uuid(),
  type: z.enum([PendingTypeEnum.Enum['relation-reorder'], PendingTypeEnum.Enum['relation-edit']]),
  data: RelationSchema,
  timestamp: z.string().datetime(),
  retryCount: z.number().int().min(0),
});

const PendingOperationRelationDeleteSchema = z.object({
  id: z.string().uuid(),
  type: PendingTypeEnum.extract(['relation-delete']),
  data: RelationSchema,
  timestamp: z.string().datetime(),
  retryCount: z.number().int().min(0),
});

const PendingOperationTaskCreateSchema = z.object({
  id: z.string().uuid(),
  type: PendingTypeEnum.extract(['task-create']),
  data: basicTaskSchema,
  timestamp: z.string().datetime(),
  retryCount: z.number().int().min(0),
});

const PendingOperationTaskEditSchema = z.object({
  id: z.string().uuid(),
  type: PendingTypeEnum.extract(['task-edit']),
  data: basicTaskSchema.pick({
    id: true,
    task_relations_id: true,
    last_modified: true,
    task: true,
    completed_at: true,
    completed_by: true,
  }),
  timestamp: z.string().datetime(),
  retryCount: z.number().int().min(0),
});
const PendingOperationTaskToggleSchema = z.object({
  id: z.string().uuid(),
  type: PendingTypeEnum.extract(['task-toggle']),
  data: basicTaskSchema.pick({
    id: true,
    task_relations_id: true,
    last_modified: true,
    completed_at: true,
    completed_by: true,
  }),
  timestamp: z.string().datetime(),
  retryCount: z.number().int().min(0),
});

const PendingOperationTaskDeleteSchema = z.object({
  id: z.string().uuid(),
  type: PendingTypeEnum.extract(['task-delete']),
  data: basicTaskSchema.pick({ id: true, task_relations_id: true, last_modified: true }),
  timestamp: z.string().datetime(),
  retryCount: z.number().int().min(0),
});

const PendingOperationTaskReorderSchema = z.object({
  id: z.string().uuid(),
  type: PendingTypeEnum.extract(['task-reorder']),
  data: basicTaskSchema
    .pick({ id: true, order_idx: true, task_relations_id: true, last_modified: true })
    .array(),
  timestamp: z.string().datetime(),
  retryCount: z.number().int().min(0),
});

export const PendingOperationSchema = z.discriminatedUnion('type', [
  PendingOperationTaskCreateSchema,
  PendingOperationTaskEditSchema,
  PendingOperationTaskDeleteSchema,
  PendingOperationTaskReorderSchema,
  PendingOperationTaskToggleSchema,
  PendingOperationRelationEditReorderSchema,
  PendingOperationRelationDeleteSchema,
]);

export type PendingOperation = z.infer<typeof PendingOperationSchema>;

export const SyncBatchRequestSchema = z.object({
  operations: PendingOperationSchema.array(),
});

export type SyncBatchRequest = z.infer<typeof SyncBatchRequestSchema>;

export const SyncBatchResponseSchema = z.object({
  success: z.string().uuid().array(),
  failed: z.string().uuid().array(),
});

export type SyncBatchResponse = z.infer<typeof SyncBatchResponseSchema>;

export type InsertPendingOperation = Omit<PendingOperation, 'retryCount'> & {
  retryCount?: number;
};

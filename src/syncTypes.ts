import { TaskType } from './task';
import { RelationType } from './relations';

export type InsertPendingOperation = Omit<PendingOperation, 'retry_count' | 'status'> & {
  retry_count?: number;
  status?: 'pending' | 'failed';
};
type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export type PendingOperation =
  | PendingOperationRelation
  | PendingOperationTask
  | PendingOperationRelationDelete;

type PendingOperationRelation = {
  id: string;
  type: 'edit' | 'reorder';
  entity: 'relation';
  data: RelationType;
  timestamp: string;
  retryCount: number;
};
type PendingOperationRelationDelete = {
  id: string;
  type: 'delete';
  entity: 'relation';
  data: RelationType | RelationType[];
  timestamp: string;
  retryCount: number;
};
type PendingOperationTask =
  | PendingOperationTaskEdit
  | PendingOperationTaskReorder
  | PendingOperationTaskCreate
  | PendingOperationTaskDelete;

type PendingOperationTaskCreate = {
  id: string;
  type: 'create';
  entity: 'task';
  data: Omit<TaskType, 'id'>;
  timestamp: string;
  retryCount: number;
};
type PendingOperationTaskEdit = {
  id: string;
  type: 'edit';
  entity: 'task';
  data: AtLeast<TaskType, 'id' | 'task_relations_id'>;
  timestamp: string;
  retryCount: number;
};
type PendingOperationTaskDelete = {
  id: string;
  type: 'delete';
  entity: 'task';
  data: Pick<TaskType, 'id' | 'task_relations_id'>;
  timestamp: string;
  retryCount: number;
};
type PendingOperationTaskReorder = {
  id: string;
  type: 'reorder';
  entity: 'task';
  data: Pick<TaskType, 'id' | 'order_idx' | 'task_relations_id'>[];
  timestamp: string;
  retryCount: number;
};

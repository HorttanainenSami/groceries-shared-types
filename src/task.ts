import z from 'zod';


export const basicTaskSchema = z.object({
  id: z.string().uuid(),
  task: z.string(),
  created_at: z.string().datetime(),
  completed_by: z.string().uuid().nullable(),
  completed_at: z.string().datetime().nullable(),
  task_relations_id: z.string().uuid(),
  order_idx: z.number().default(9999),
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

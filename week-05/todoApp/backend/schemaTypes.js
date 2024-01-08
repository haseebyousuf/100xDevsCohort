import zod from 'zod';

export const createTodoSchema = zod.object({
  taskName: zod.string(),
  completed: zod.boolean(),
});

export const updateTodoSchema = zod.object({
  id: zod.string(),
  completed: zod.boolean(),
});

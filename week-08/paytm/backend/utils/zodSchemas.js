import zod from 'zod';

export const signUpSchema = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

export const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

import zod from 'zod';

export const signUpSchema = zod.object({
  username: zod.string().email().max(30),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

export const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

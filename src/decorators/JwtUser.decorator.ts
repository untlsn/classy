import { createParamDecorator, type ExecutionContext } from '@nestjs/common';

export const JwtUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

export type { JwtUserPayload } from '../api/auth/auth';

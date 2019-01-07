import { Context } from 'koa';
import * as services from '../service/ping';

export const get = async (ctx: Context, next: () => void) => {
  ctx.state.data = await services.ping();
  await next();
};

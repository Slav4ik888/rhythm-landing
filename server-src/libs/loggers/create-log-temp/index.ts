import { Context } from '../../../app/types/global';
import { isStr } from '../../validators';

/**
 * Create log template
 * exm: [Function name][Requester][value]
 *      [Signup][korzan.va@mail.ru][user: Slava]
 */
export const createLogTemp = (
  ctx          : Context | string,
  functionName : string,
  value?       : string
): string => {
  const email = isStr(ctx) ? ctx : (ctx as Context)?.state?.user?.email || 'quest';
  const utms = isStr(ctx) ? undefined : (ctx as Context)?.request?.body?.utms; // { name: '123', company: '456', email: 'korzan.va@mail.ru' }

  let res = `[${functionName}][${email}]`;

  if (value) res += `[${value}]`;
  if (utms) res += `[utms: ${JSON.stringify(utms)}]`;

  return res
};

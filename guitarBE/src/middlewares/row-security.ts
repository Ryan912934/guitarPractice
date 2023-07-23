/**
 * `row-security` middleware
 */

import { Strapi } from '@strapi/strapi';
import { isCollectionRoute } from '../utils/isCollectionRoute';
import { getUserId } from '../utils/getUserId';

export default (config, { strapi }: { strapi: Strapi }) => {

  return async (ctx, next) => {

    if (!['POST', 'PUT'].includes(ctx.request.method)) return await next();

    if (!isCollectionRoute(strapi, ctx.request.path)) return await next();

    strapi.log.info('In row-security middleware.');

    if (!ctx.request.url.startsWith('/api/')) {
      return await next();
    }

    ctx.request.body.data = {
      ...ctx.request.body.data,
      user: {
        id: getUserId(ctx)

      }
    }


    await next();



  };
};

/**
 * `populate-user` middleware
 */

import { Strapi } from '@strapi/strapi';
import { isCollectionRoute } from '../utils/isCollectionRoute';
import { getUserId } from '../utils/getUserId';

export default (config, { strapi }: { strapi: Strapi }) => {

  return async (ctx, next) => {

    if(!ctx.request.url.startsWith('/api/')){
        return await next();
    }

    if(!isCollectionRoute(strapi, ctx.request.path)) return await next();

    if(ctx.request.method !== 'GET') return await next();


    strapi.log.info('In pop-user middleware.,.,.');

    if(Object.keys(ctx.request.query).indexOf('populate') === -1){
        ctx.request.query['populate'] = 'user';
    } else {

        if(typeof(ctx.request.query.populate) === 'string' && ctx.request.query.populate !== 'user'){
            ctx.request.query.populate = [ctx.request.query.populate, 'user']
        } else {
            ctx.request.query.populate = [...ctx.request.query.populate, 'user']
        }
        
    }

    const id = getUserId(ctx);

    if(Object.keys(ctx.request.query).indexOf('filters') === -1){
        ctx.request.query['filters'] = {
            user: id
        }
    } else {
        ctx.request.query['filters'] = {
            ... ctx.request.query['filters'],
            user: id
        }
    }

    strapi.log.debug(JSON.stringify(ctx.request.query));

    await next();

  };
};

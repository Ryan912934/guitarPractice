/**
 * routine-practice controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::routine-practice.routine-practice', ({ strapi }) => ({

    async create (ctx) {

        const body = ctx.request.body.data;


        strapi.log.debug(`body \n ${JSON.stringify(body)}`)

        const entry = await strapi.entityService.create('api::routine-practice.routine-practice', {
            data: {
              skips: body.skips,
              totalTimeMins: body.totalTimeMins,
              routine: {
                set: [body.routine]
              },
              owner: {
                set: [ctx.state.user.id]
              }
            },
          });

        strapi.log.debug('done')

        return entry;

    }

}));

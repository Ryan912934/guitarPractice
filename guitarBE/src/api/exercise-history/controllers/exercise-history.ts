/**
 * exercise-history controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::exercise-history.exercise-history', ({strapi}) => ({
    async getOne(ctx) {
        const id = ctx.params.id;

        const data = await strapi.entityService.findOne('api::exercise-history.exercise-history', id, {
            populate: {
                "owner": true
            }
        });

        if(data.owner.id !== ctx.state.user.id){
            return;
        }

        data.Owner = data.Owner.id

        return data;
    },

    async create(ctx) {
        const body = ctx.request.body;

        const entry = await strapi.entityService.create('api::exercise-history.exercise-history', {
            data: {
              BPM: body.bpm,
              speed: body.speed,
              comments: body.comments,
              lengthMinutes: body.time,
              owner: {
                set: [ctx.state.user.id]
              },
              exercise: {
                set: [body.exerciseId]
              }
            },
          });

        return entry;
    }
}));

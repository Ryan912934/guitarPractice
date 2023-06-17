/**
 * exercise controller
 */

import { factories } from '@strapi/strapi'


export default factories.createCoreController('api::exercise.exercise', ({ strapi }) => ({

    async getName(ctx) {

      if(!ctx.state.user.id){return}

      const data = await strapi.entityService.findOne('plugin::users-permissions.user', ctx.state.user.id, {
        populate: {
            "Username": true
        }
    });

    return data;


    },

    async getAll(ctx) {

        // strapi.log.info(ctx.state.user.id);
        const query = ctx.request.query;
        const start = query.start ?? 0;
        const limit = query.limit ?? 25;

        let entries = await strapi.entityService.findMany('api::exercise.exercise', {
            fields: ['Name', 'Description'],
            filters: { Owner: ctx.state.user.id },
            sort: { Name: 'DESC' },
            start,
            limit
        });

        for (let i = 0; i < entries.length; i++) {
            const id = entries[i].id;
            const r = await strapi.entityService.findMany('api::exercise-history.exercise-history', {
                fields: ['createdAt'],
                filters: { exercise: id },
                sort: { createdAt: 'DESC' }
            });

            if(!r[0]){
                entries[i].practiceCount = 0;
                continue;
            }

            entries[i].latestPractice = r[0].createdAt;
            entries[i].practiceCount = r.length;

        }



        return entries;

    },



    async getOne(ctx){

        const id = ctx.params.id;

        const data = await strapi.entityService.findOne('api::exercise.exercise', id, {
            populate: {
                "Owner": true
            }
        });

        if(data.Owner.id !== ctx.state.user.id){
            return;
        }

        data.Owner = data.Owner.id;

        let comments = await strapi.entityService.findMany('api::exercise-history.exercise-history',{
          filters : {
            exercise: {
              id: id
            }
          },
          fields: 'comments',
          limit: 5,
          sort: {createdAt : 'desc'}
        });

        data.comments = comments.map(i => i.comments)

        return data;
    },

    async create(ctx){

        strapi.log.info('Create exercise')
        const body = ctx.request.body;

        const entry = await strapi.entityService.create('api::exercise.exercise', {
            data: {
              Name: body.name,
              Description: body.description,
              metronome: body.metronome,
              video: body.video,
              guide: body.guide,
              Owner: {
                set: [ctx.state.user.id]
              }
            },
          });

        return entry;
    },
    async update(ctx){

        const id = ctx.params.id;
      const body = ctx.request.body;

      const entries = await strapi.entityService.findMany('api::exercise.exercise', {
        filters: { 
          Owner: ctx.state.user.id,
          id: id
        },
      });

      if(entries.length === 0){
        return ctx.unauthorized('Ids do not match');
      }

      const entry = await strapi.entityService.update('api::exercise.exercise',id, {
        data: {
            Name: body.name,
            Description: body.description,
            metronome: body.metronome,
            video: body.video,
            guide: body.guide,
            Owner: {
              set: [ctx.state.user.id]
            }
          },
      });

      return entry;

    }
}));
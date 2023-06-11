/**
 * routine controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::routine.routine', ({ strapi }) => ({
    async getAll(ctx) {

        const query = ctx.request.query;
        const start = query.start ?? 0;
        const limit = query.limit ?? 25;

        let entries = await strapi.entityService.findMany('api::routine.routine', {
            fields: ['Name', 'description'],
            filters: { owner: ctx.state.user.id },
            sort: { Name: 'DESC' },
            start,
            limit
        });


        return entries;

    },

    async getOne(ctx) {

      const id = ctx.params.id;

      let entries = await strapi.entityService.findMany('api::routine.routine', {
          fields: ['Name', 'description'],
          filters: { 
            owner: ctx.state.user.id,
            id: id
          },
      });
      

      let exercises = await strapi.entityService.findMany('api::routine-exercise.routine-exercise', {
        fields: ['order', 'duration'],
        populate: ['exercise'],
        filters: { 
          routine: id
        },
        sort: {order: 'ASC'}
    });

    entries = {
      routine: entries[0],
      exercises: exercises
    }

      return entries;

  },

    async create(ctx) {
        const body = ctx.request.body;

        const entry = await strapi.entityService.create('api::routine.routine', {
            data: {
              Name: body.name,
              description: body.description,
              owner: {
                set: [ctx.state.user.id]
              }
            },
          });

        return entry;
    },

    async update(ctx) {

      const id = ctx.params.id;
      const body = ctx.request.body;

      const entries = await strapi.entityService.findMany('api::routine.routine', {
        filters: { 
          owner: ctx.state.user.id,
          id: id
        },
      });

      if(entries.length === 0){
        return ctx.unauthorized('Ids do not match');
      }

      let newData:any = {}

      if(body.name){
        newData.Name = body.name
      }

      if(body.description){
        newData.description = body.description;
      }

      const entry = await strapi.entityService.update('api::routine.routine',id, {
        data: {
          ...newData
        },
      });

      return entry;


    }
}));

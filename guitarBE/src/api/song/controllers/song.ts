/**
 * song controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::song.song', ({ strapi }) => ({

    async getOne(ctx) {

        let entries = await strapi.entityService.findMany('api::song.song', {
            fields: ['title', 'artist', 'status'],
            filters: {
                owner: ctx.state.user.id,
                id: ctx.params.id
            },
            sort: { artist: 'DESC' }
        });

        return entries;

    },

    async delete(ctx){
   
        const id = ctx.params.id;

        const entries = await strapi.entityService.findMany('api::song.song', {
            filters: {
                owner: ctx.state.user.id,
                id: id
            },
        });




        if(entries.length === 0){
            return
        }

        const d = await strapi.entityService.delete('api::song.song', id)

        return d;

    
    },

    async getMany(ctx) {
        const query = ctx.request.query;
        const start = query.start ?? 0;
        const limit = query.limit ?? 25;


        let filters:any = { 
            owner: ctx.state.user.id,
         };

         if(query.status){
            filters.status = query.status;
         }

        let entries = await strapi.entityService.findMany('api::song.song', {
            fields: ['title', 'artist', 'status'],
            filters,
            sort: { artist: 'DESC' },
            start,
            limit
        });

        let c = await strapi.entityService.findMany('api::song.song', {
            fields: [],
            filters,
            sort: { artist: 'DESC' },
        });

        return {
            songs: entries,
            count: c.length
        };
    },

    async create(ctx) {

        const body = ctx.request.body;

        strapi.log.debug(JSON.stringify(body))
        strapi.log.debug('status')
        strapi.log.debug(body.status)

        let entry;
        try {

        
        entry = await strapi.entityService.create('api::song.song', {
            data: {
                title: body.song,
                artist: body.artist,
                status: body.status,
                owner: {
                    set: [ctx.state.user.id]
                }
            },
        });
    } catch (e){

    }


        return entry;

    },

    async update(ctx) {

        const id = ctx.params.id;
        const body = ctx.request.body;

        const entries = await strapi.entityService.findMany('api::song.song', {
            filters: {
                owner: ctx.state.user.id,
                id: id
            },
        });

        if(entries.length === 0){
            return
        }



        const entry = await strapi.entityService.update('api::song.song', id, {
            data: {
                title: body.song || entries.title,
                artist: body.artist || entries.artist,
                status: body.status || entries.status,
            },
        });

        strapi.log.debug(JSON.stringify(entry))

        return entry;



    }


}));


/**
 * routine-exercise controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::routine-exercise.routine-exercise', ({ strapi }) => ({
    async up(ctx) {

        const id = ctx.params.id;

        const data = await strapi.entityService.findOne('api::routine-exercise.routine-exercise', id, {
            populate: {
                "exercise": {
                    populate: {
                        "Owner": true
                    }
                },
                "routine": true
            }
        })

        if (data.exercise.Owner.id !== ctx.state.user.id) {
            return ctx.unauthorized('Ids do not match');
        }

        const curPlace = data.order;

        if (curPlace === 1) {
            strapi.log.info('cant move up when already first')
            return;
        };

        strapi.log.info(`At ${curPlace}`)
        strapi.log.info(`Routine ID : ${data.routine.id}`)

        const data2 = await strapi.entityService.findMany('api::routine-exercise.routine-exercise', {
            populate: ['exercise'],
            filters: {
                $and: [
                    {
                        routine: {
                            id: data.routine.id
                        }
                    },
                    { order: curPlace - 1 }
                ]
            },
        })

        const otherId = data2[0].id;


        await strapi.entityService.update('api::routine-exercise.routine-exercise', id, {
            data: {
                order: curPlace - 1
            }
        })

        await strapi.entityService.update('api::routine-exercise.routine-exercise', otherId, {
            data: {
                order: curPlace
            }
        })

        return { msg: 'success' };



    },

    async add(ctx) {
        const body = ctx.request.body;

        strapi.log.debug(body.routineId)

        const orders = await strapi.entityService.findMany('api::routine-exercise.routine-exercise', {
            filters: {
                routine: {
                    id: body.routineId
                }

            }
        })

        
        const orderMax = orders.reduce((acc, cur) => {
            return Math.max(acc, cur.order)
        }, 0)


        const d = await strapi.entityService.create('api::routine-exercise.routine-exercise', {
            data: {
                routine : {
                    id: body.routineId,
                },
                exercise: {
                    id: body.exerciseId
                },
                order : orderMax + 1
            }   
        })

        return d;
    },

    async down(ctx) {

        const id = ctx.params.id;

        const data = await strapi.entityService.findOne('api::routine-exercise.routine-exercise', id, {
            populate: {
                "exercise": {
                    populate: {
                        "Owner": true
                    }
                },
                "routine": true
            }
        })

        if (data.exercise.Owner.id !== ctx.state.user.id) {
            return ctx.unauthorized('Ids do not match');
        }

        const countData = await strapi.entityService.findMany('api::routine-exercise.routine-exercise', {
            filters: {
                routine: {
                    id: data.routine.id
                }

            },
        })
        const count = countData.length;


        const curPlace = data.order;

        if (curPlace === count) {
            strapi.log.info('already bottom')
            strapi.log.info(curPlace)
            strapi.log.info(count)
            return;
        };

        const data2 = await strapi.entityService.findMany('api::routine-exercise.routine-exercise', {
            filters: {
                $and: [
                    {
                        routine: {
                            id: data.routine.id
                        }
                    },
                    { order: curPlace + 1 }
                ]
            },
        })

        const otherId = data2[0].id;


        await strapi.entityService.update('api::routine-exercise.routine-exercise', id, {
            data: {
                order: curPlace + 1
            }
        })

        await strapi.entityService.update('api::routine-exercise.routine-exercise', otherId, {
            data: {
                order: curPlace
            }
        })

        return { msg: 'success' };


    }
}));
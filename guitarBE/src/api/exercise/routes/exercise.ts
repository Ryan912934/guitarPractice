/**
 * exercise router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::exercise.exercise');

export default {
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/exercises',
        handler: 'exercise.getAll',
      },
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/exercise/:id',
        handler: 'exercise.getOne',
      },
      { // Path defined with a URL parameter
        method: 'POST',
        path: '/exercise',
        handler: 'exercise.create',
      },
      { // Path defined with a URL parameter
        method: 'POST',
        path: '/exercise/:id',
        handler: 'exercise.update',
      }

    ]
  }
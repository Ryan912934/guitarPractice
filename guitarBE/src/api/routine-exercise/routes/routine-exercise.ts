/**
 * routine-exercise router
 */

import { factories } from '@strapi/strapi';

export default {
    routes: [
        { // Path defined with a URL parameter
          method: 'POST',
          path: '/routine-exercise/:id/up',
          handler: 'routine-exercise.up',
        },
        { // Path defined with a URL parameter
            method: 'POST',
            path: '/routine-exercise/:id/down',
            handler: 'routine-exercise.down',
          },
          {
            method: 'DELETE',
            path: '/routine-exercise/:routineId/:order',
            handler: 'routine-exercise.delete'
          },
          {
            method: 'POST',
            path: '/routine-exercise/',
            handler: 'routine-exercise.add'
          },
          {
            method: 'POST',
            path: '/routine-exercise/:id',
            handler: 'routine-exercise.updateDuration'
          }
    ]};
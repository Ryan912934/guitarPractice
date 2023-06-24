/**
 * routine-practice router
 */

import { factories } from '@strapi/strapi';

export default {
    routes: [
        {
          method: 'POST',
          path: '/routine-practice/',
          handler: 'routine-practice.create',
        },
    ]
}
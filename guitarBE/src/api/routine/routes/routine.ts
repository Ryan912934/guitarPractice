/**
 * routine router
 */


export default {
    routes: [
        { // Path defined with a URL parameter
          method: 'GET',
          path: '/routine/',
          handler: 'routine.getAll',
        },
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/routine/:id',
            handler: 'routine.getOne',
          },
        {
            method: 'POST',
            path: '/routine/',
            handler: 'routine.create',
        },
        {
          method: 'POST',
          path: '/routine/:id',
          handler: 'routine.update',
      }
    ]
}
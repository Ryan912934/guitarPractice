/**
 * exercise-history router
 */


export default {
    routes: [
        { // Path defined with a URL parameter
          method: 'GET',
          path: '/exercise-history/:id',
          handler: 'exercise-history.getOne',
        },
        {
            method: 'POST',
            path: '/exercise-history/',
            handler: 'exercise-history.create',
        },
    ]
}
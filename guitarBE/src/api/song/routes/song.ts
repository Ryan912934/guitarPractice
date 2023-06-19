/**
 * song router
 */



export default {
    routes: [
        { // Path defined with a URL parameter
          method: 'GET',
          path: '/song/',
          handler: 'song.getMany',
        },
        { // Path defined with a URL parameter
          method: 'DELETE',
          path: '/song/:id',
          handler: 'song.delete',
        },
        { // Path defined with a URL parameter
            method: 'GET',
            path: '/song/:id',
            handler: 'song.getOne',
          },
        {
            method: 'POST',
            path: '/song/',
            handler: 'song.create',
        },
        {
          method: 'POST',
          path: '/song/:id',
          handler: 'song.update',
      }
    ]
}
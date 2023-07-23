const rowSecConfig = {
  apiRoutes: ['song']
}

export default [

  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'global::populate-user',
    config: rowSecConfig
  },
  {
    name: 'global::row-security',
    config: rowSecConfig
  },
];

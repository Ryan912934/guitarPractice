import pickBy from 'lodash/pickBy'

export function isCollectionRoute(strapi, path){

    const contentType = pickBy(strapi.contentTypes, (val, key) => {
        return val.info.pluralName === path.split('/')[2]
    });

    if(Object.keys(contentType).length === 0) return false;

    const key = Object.keys(contentType)[0]

    return contentType[key].attributes.user?.type === 'relation';

}
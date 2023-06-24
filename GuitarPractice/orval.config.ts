import { defineConfig } from 'orval';

export default defineConfig({
    strapi: {
        input: '../guitarBE/src/extensions/documentation/documentation/1.0.0/full_documentation.json',
        output: {
            mode: 'tags-split',
            target: 'src/api/openApi/strapiApi.ts',
            schemas: 'src/api/model',
            client: 'react-query',
            override: {
                query: {
                    useQuery: true,
                    useInfinite: true,
                    options: {
                        staleTime: 10000,
                    },
                },
            },
        }
    },
});


export default {
    documentation: {
        enabled: true,
        config: {
            "x-strapi-config": {
                mutateDocumentation: (generatedDocumentationDraft) => {
                    delete generatedDocumentationDraft['paths']['/upload?id={id}']
                }
            }
        }
    }
}
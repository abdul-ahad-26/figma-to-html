import { Rule } from "sanity";

export const Post1 = {
    name: 'post1',
    title: 'Post1',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule:Rule) => rule.required()
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        }

        
    ]

}
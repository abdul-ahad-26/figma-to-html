import { Rule } from "sanity";

export const Work = {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule:Rule) => rule.required()
        },
        {
            name: 'year',
            title: 'Year',
            type: 'number'
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
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: (rule:Rule) => rule.required()
        }

        
    ]

}
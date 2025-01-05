import { Rule } from "sanity";

export const Main = {
    name: 'main',
    title: 'Main',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule:Rule) => rule.required()
        },
        
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        },
        {
            name: 'image',
            title: 'Iamge',
            type: 'image',
            validation: (rule:Rule) => rule.required()
        }

        
    ]

}
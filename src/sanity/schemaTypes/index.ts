import { type SchemaTypeDefinition } from 'sanity'

import { Main } from './main'
import { Work } from './work'
import { Post1 } from './post1'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Main,Post1, Work],
}

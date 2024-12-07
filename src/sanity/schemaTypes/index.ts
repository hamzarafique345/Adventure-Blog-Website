import { type SchemaTypeDefinition } from 'sanity'
import { Category } from './category'
import { Feature } from './feature_cnt'
import {BlogData} from '../schemaTypes/blogsanity'
 export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Category,Feature , BlogData ],
}

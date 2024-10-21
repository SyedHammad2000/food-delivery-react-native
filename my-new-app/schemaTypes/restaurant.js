import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Restaurant Description',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of the dish',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      title: 'Location',
      type: 'number',
    }),
    defineField({
      name: 'lng',
      title: 'Location',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
    }),
    defineField({
      name: 'reviews',
      title: 'Restaurant Reviews',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Restaurant Rating',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(5).error('Please enter between 1 to 5'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dish',
      title: 'Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})

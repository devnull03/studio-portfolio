import {defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'email', type: 'string', validation: (r) => r.required().email()}),
    defineField({name: 'phone', type: 'string'}),
    defineField({name: 'location', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'website', type: 'url'}),
    defineField({name: 'linkedin', type: 'url'}),
    defineField({name: 'github', type: 'url'}),
    defineField({name: 'resume', title: 'Resume (URL)', type: 'url'}),
    defineField({name: 'resumePdf', title: 'Resume PDF', type: 'file', options: {storeOriginalFilename: true}}),
  ],
  preview: {select: {title: 'name', subtitle: 'title'}},
})

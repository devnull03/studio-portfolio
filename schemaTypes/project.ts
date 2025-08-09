import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'identifier',
      title: 'Identifier',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (r) => r.required(),
    }),
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'organization', title: 'Organization / Owner', type: 'string'}),
    defineField({name: 'location', type: 'string'}),
    defineField({name: 'startDate', type: 'date'}),
    defineField({name: 'endDate', type: 'date'}),
    defineField({name: 'description', type: 'text'}),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'technologies',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'achievements',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'category',
      type: 'string',
      initialValue: 'personal',
      validation: (r) => r.required(),
      options: {
        list: [
          {title: 'Work Experience', value: 'work-experience'},
          {title: 'Personal', value: 'personal'},
          {title: 'Academic', value: 'academic'},
          {title: 'Freelance', value: 'freelance'},
          {title: 'Hackathon', value: 'hackathon'},
        ],
        layout: 'dropdown',
      },
    }),
    defineField({name: 'githubUrl', type: 'url'}),
    defineField({
      name: 'previewItems',
      title: 'Preview Items',
      description: 'Items to showcase (implements PreviewItem interface).',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'previewItem',
            fields: [
              {name: 'link', type: 'url', title: 'Link', validation: r => r.required()},
              {name: 'title', type: 'string', title: 'Title', validation: r => r.required()},
              {name: 'image', type: 'image', title: 'Image'},
            ],
            preview: {
              select: {title: 'title', subtitle: 'link', media: 'image'},
            },
        },
      ],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'category'},
  },
})

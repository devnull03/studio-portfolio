import {defineField, defineType} from 'sanity'

export const resumeEntry = defineType({
  name: 'resumeEntry',
  title: 'Resume Entry',
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
    defineField({name: 'organization', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'location', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'startDate', type: 'date', validation: (r) => r.required()}),
    defineField({name: 'endDate', type: 'date'}),
    defineField({name: 'description', type: 'text'}),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'text'}],
      validation: (r) => r.required().min(1),
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
      name: 'relatedProjects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}]}],
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Work Experience', value: 'work-experience'},
          {title: 'Education', value: 'education'},
          {title: 'Academic', value: 'academic'},
          {title: 'Freelance', value: 'freelance'},
          {title: 'Hackathon', value: 'hackathon'},
          {title: 'Personal', value: 'personal'},
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
    defineField({name: 'gpa', type: 'string'}),
    defineField({name: 'field', type: 'string', description: 'Field of study'}),
    defineField({name: 'degree', type: 'string'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'organization'},
  },
})

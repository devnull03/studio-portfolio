import {defineField, defineType} from 'sanity'

// Single document representing a skill section that directly embeds its list of skills
export const skillSection = defineType({
  name: 'skillSection',
  title: 'Skill Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description: 'Section title (e.g. Programming Languages, Frameworks & Software)',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'skill',
          title: 'Skill',
          fields: [
            defineField({
              name: 'id',
              type: 'slug',
              title: 'ID',
              description: 'Auto-generated from name; used as stable identifier',
              options: {
                source: 'name',
                slugify: (input: string) =>
                  input
                    .toLowerCase()
                    .trim()
                    .replace(/&/g, 'and')
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/^-+|-+$/g, '')
                    .slice(0, 64),
              },
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'name',
              type: 'string',
              title: 'Display Name',
              validation: (r) => r.required(),
            }),
            defineField({
              name: 'proficiency',
              type: 'string',
              description: 'Only for Languages, skip for technical skills',
              options: {
                list: ['Native', 'Fluent', 'Conversational', 'Basic'],
                layout: 'radio',
              },
            }),
          ],
          preview: {
            select: {title: 'name', subtitle: 'id.current'},
          },
        },
      ],
      validation: (r) => r.min(1),
    }),
  ],
  preview: {
    select: {title: 'title', count: 'skills'},
    prepare(selection) {
      const {title} = selection as {title: string; count: any[]}
      return {
        title,
        subtitle: 'Skill Section',
      }
    },
  },
})


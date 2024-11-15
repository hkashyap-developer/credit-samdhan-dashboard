import {defineField, defineType} from 'sanity'

export const blogs = defineType({
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [

    defineField({
      name: 'title',
      type: 'string',
    }),


    defineField({
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
          source: 'title', // Slug will be generated from the 'title' field
          maxLength: 96,   // Optional: Set a max length for the slug
        },
      }),



      defineField({
        name: 'publishedAt',  // Field for storing today's date
        type: 'datetime',
        title: 'Published At',
      }),

      defineField({
        name: 'excerpt',  // Excerpt field
        type: 'text',
        title: 'Excerpt',
        description: 'A short summary or preview of the post',
        validation: Rule => Rule.max(200).warning('Excerpts should be under 200 characters.'),  // Optional validation
      }),

    defineField({
        name: 'details',
        type: 'array',
        of: [{type: 'block'}],
      }),

      defineField({
        name: 'image',
        title: 'Thumbnail',
        type: 'image',
        options: {
          hotspot: true, // Enables image cropping/positioning
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Alternative text for accessibility and SEO',
          },
        ],
      }),

      defineField({
        name: 'full_image',
        title: 'Full Image',
        type: 'image',
        options: {
          hotspot: true, // Enables image cropping/positioning
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Alternative text for accessibility and SEO',
          },
        ],
      }),

  ],
})
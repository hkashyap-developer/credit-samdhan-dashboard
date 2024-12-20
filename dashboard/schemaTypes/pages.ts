import {defineField, defineType} from 'sanity'

export const pages = defineType({
  name: 'pages',
  title: 'Pages',
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
        name: 'details',
        type: 'array',
        of: [{type: 'block'}],
      }),








      defineField({
        name: 'image',
        title: 'Image',
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
          {
            name: 'caption',
            title: 'Caption',
            type: 'string',
            description: 'Caption for the image',
            options: {
              isHighlighted: true, // Ensure this field shows up on the main image selection
            },
          },
          {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Tags to categorize images',
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
          {
            name: 'caption',
            title: 'Caption',
            type: 'string',
            description: 'Caption for the image',
            options: {
              isHighlighted: true, // Ensure this field shows up on the main image selection
            },
          },
          {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Tags to categorize images',
          },
        ],
      }),


      
  ],
})
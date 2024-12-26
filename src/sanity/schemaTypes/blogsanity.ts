export const BlogData = {
    name:"bloglatest",
    type:"document",
    title:"Blog Detailed",
    fields:[
        {
            name:"image",
            type:"image",
            title:"Select Blog image"
        },
        {
            name:"blogtitle",
            type:"string",
            title:"Blog Title",
        },
        {
            name:"paragraph",
            type:"text",
            title:"Content f Blog",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        }
    ]
}
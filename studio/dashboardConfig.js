export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6284ef9a042af407850a9370',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gft44n1j',
                  apiId: '96d2c80e-67aa-4b4f-863c-2161256d51e0'
                },
                {
                  buildHookId: '6284ef9bcbbe3a0a311693dc',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7twntmq5',
                  apiId: 'd96cb9ff-efd7-4349-afc2-5cbeefb8aedd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CodyKnapp/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7twntmq5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

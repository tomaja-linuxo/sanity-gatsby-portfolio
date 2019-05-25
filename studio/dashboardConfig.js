export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5ce9353e0e7fa8a5164ed1b5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4hrm5cca',
                  apiId: '00f0ecf5-759b-4050-8d1d-b68338956ca9'
                },
                {
                  buildHookId: '5ce9353ecc81f10a9512e45a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qsxt1cje',
                  apiId: 'bcf28238-b2ca-4961-8c34-f3c20587b76a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomaja-linuxo/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-qsxt1cje.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}

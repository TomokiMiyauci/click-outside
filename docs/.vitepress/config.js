const title = 'arithmetic4'
const description = 'Type-safe curried arithmetic functions'
const baseUrl = 'https://arithmetic4.web.app'
const baseHead = [
  ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
  ['meta', { name: 'author', content: 'TomokiMiyauci' }],
  ['meta', { name: 'copyright', content: '2021 ©TomokiMiyauci' }],
  ['meta', { property: 'og:title', content: title }],
  ['meta', { property: 'og:image', content: `${baseUrl}/logo.png` }],
  [
    'meta',
    {
      property: 'og:url',
      content: baseUrl
    }
  ],
  [
    'meta',
    {
      property: 'og:type',
      content: 'website'
    }
  ],
  [
    'meta',
    {
      property: 'og:site_name',
      content: `${title} docs`
    }
  ],
  ['meta', { name: 'twitter:card', content: 'summary' }],
  ['meta', { name: 'twitter:site', content: '@tomoki_miyauci' }]
]
module.exports = {
  title,
  description,

  base: `/${title}/`,

  locales: {
    '/': {
      lang: 'en-US',
      head: [
        ['meta', { property: 'og:description', content: description }],
        ...baseHead
      ]
    }
  },

  themeConfig: {
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Guide', link: '/guide/', activeMatch: '^/guide' },
          {
            text: 'Release Notes',
            link:
              'https://github.com/TomokiMiyauci/arithmetic4/blob/main/CHANGELOG.md'
          }
        ],
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        sidebar: {
          '/guide/': 'auto'
        }
      }
    },

    repo: `TomokiMiyauci/${title}`,
    logo: '/logo.png',
    docsDir: 'docs',
    docsBranch: 'main',

    editLinks: true
  }
}

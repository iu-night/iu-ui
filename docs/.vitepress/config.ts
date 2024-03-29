import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Iu-vue",
  description: "Components based on Vue3",
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/pages/guide/start' },
      { text: 'Component', link: '/pages/components/affix' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Start', link: '/pages/guide/start' },
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Affix', link: '/pages/components/affix' },
          { text: 'Anchor', link: '/pages/components/anchor' },
          { text: 'Backtop', link: '/pages/components/backtop' },
          { text: 'Button', link: '/pages/components/button' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

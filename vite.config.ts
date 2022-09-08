import { resolve } from 'path'
import type { ConfigEnv } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Markdown from 'vite-plugin-vue-markdown'
import Prism from 'markdown-it-prism'
import LinkAttributes from 'markdown-it-link-attributes'
import Unocss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
// import generateSitemap from 'vite-ssg-sitemap'
import Layouts from 'vite-plugin-vue-layouts'
import Inspect from 'vite-plugin-inspect'
import DefineOptions from 'unplugin-vue-define-options/vite'
// import prismjs from 'vite-plugin-prismjs'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  return {
    base: '/',

    resolve: {
      alias: {
        'iu-ui': `${resolve(__dirname, 'packages')}`,
        '@/': `${resolve(__dirname, 'src')}/`,
        '#/': `${resolve(__dirname, 'type')}/`,
      },
    },

    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
        reactivityTransform: true,
      }),

      vueJsx(),

      // prismjs({
      //   languages: ['markup'],
      //   css: true,
      // }),

      DefineOptions(),

      viteCompression(),

      Pages({
        dirs: [
          { dir: 'src/pages', baseRoute: '' },
        ],
        extensions: ['vue', 'md'],
      }),

      Layouts(),

      Unocss(),

      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'vue/macros',
          '@vueuse/head',
          '@vueuse/core',
        ],
        dirs: [
          'src/stores',
          'src/dark',
        ],
        vueTemplate: true,
      }),

      Components({
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          (name: string) => {
            if (name.match(/^(Iu[A-Z]|iu-[a-z])/))
              return { name, from: 'iu-ui' }
          },
        ],
      }),

      Markdown({
        wrapperClasses: 'prose prose-sm text-left',
        headEnabled: true,
        markdownItSetup(md) {
        // https://prismjs.com/
          md.use(Prism)
          md.use(LinkAttributes, {
            matcher: (link: string) => /^https?:\/\//.test(link),
            attrs: {
              target: '_blank',
              rel: 'noopener',
            },
          })
        },
      }),

      Inspect(),
    ],

    // ssgOptions: {
    //   script: 'async',
    //   formatting: 'minify',
    //   // onFinished() { generateSitemap() },
    // },

    build:
    mode === 'package'
      ? {
          lib: {
            entry: resolve(__dirname, './packages/index.ts'),
            name: 'iu-ui',
            fileName: 'iu',
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue',
              },
            },
          },
          // cssCodeSplit: true,
        }
      : {
          outDir: 'dist',
        },
  }
})


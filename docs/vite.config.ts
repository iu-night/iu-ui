import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { IuVueResolver } from 'iu-vue'

export default defineConfig({
  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/head',
        '@vueuse/core',
      ],
      vueTemplate: true,
    }),
    Components({
      dirs: [
        './components',
      ],
      resolvers: [
        IuVueResolver(),
      ],
      include: [
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
      extensions: ['vue', 'md'],
    }),
  ],
})

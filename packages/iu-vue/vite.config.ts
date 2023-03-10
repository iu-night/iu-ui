import { resolve } from 'node:path'
import type { ConfigEnv } from 'vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
// import Preview from 'vite-plugin-vue-component-preview'
import dts from 'vite-plugin-dts'

// const PreviewFunc = (Preview as any).default

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  return {
    plugins: [
      // PreviewFunc(),

      vue({
        include: [/\.vue$/, /\.md$/],
        reactivityTransform: true,
      }),

      vueJsx(),

      DefineOptions(),

      Unocss(),

      AutoImport({
        imports: [
          'vue',
          'vue/macros',
          '@vueuse/head',
          '@vueuse/core',
        ],
        vueTemplate: true,
      }),

      dts({
        entryRoot: './components',
        outputDir: 'dist/components',
        tsConfigFilePath: '../../tsconfig.json',
      }),
    ],

    build: {
      target: 'modules',
      // cssCodeSplit: true,
      lib: {
        entry: resolve(__dirname, './index.ts'),
        name: 'iu-vue',
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
    },
  }
})

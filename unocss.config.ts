import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'btn': 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    'icon-btn': 'inline-block cursor-pointer select-none transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    'flex-center': 'flex justify-center items-center',
    'in-flex-center': 'inline-flex justify-center items-center',
    'iu-b': 'b-1px b-[#000]:10 dark:b-[#fff]:10',
  },
  theme: {
    boxShadow: {
      iu: '0 1px 2px -2px rgb(0 0 0 / 8%), 0 3px 6px 0 rgb(0 0 0 / 6%), 0 5px 12px 4px rgb(0 0 0 / 4%)',
      iud: '0 1px 2px -2px rgb(255 255 255 / 8%), 0 3px 6px 0 rgb(255 255 255 / 6%), 0 5px 12px 4px rgb(255 255 255 / 4%)',
      backtop: '0 2px 8px 0 rgba(0, 0, 0, 0.2)',
      backtopd: '0 2px 8px 0 rgba(255, 255, 255, 0.2)',
      switch: '0 2px 4px 0 rgba(0, 0, 0, 0.4)',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives({
      varStyle: '--iu-',
    }),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm text-left'.split(' '),
})

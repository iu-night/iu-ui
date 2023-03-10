# Iu-vue

**Components based on Vue3.**

## Install

```shell
pnpm install iu-vue
```

## Usage

### Full Import

```js
// main.ts
import IuVue from 'iu-vue'
import 'iu-vue/dist/style.css'
// ...
app.use(IuVue)
app.mount('#app')
```

### Auto import `Recommend`

```shell
pnpm install -D unplugin-vue-components
```

```js
// vite.config.ts
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { IuVueResolver } from 'iu-vue'

export default defineConfig({
  plugins: [
    // ...
    Components({
      resolvers: [IuVueResolver()],
    }),
  ],
})
```

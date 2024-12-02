import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),

    files: {
      assets: 'src/renderer/static',
      hooks: {
        client: 'src/renderer/hooks.client',
        server: 'src/renderer/hooks.server',
        universal: 'src/renderer/hooks'
      },
      lib: 'src/renderer/lib',
      params: 'src/renderer/params',
      routes: 'src/renderer/routes',
      serviceWorker: 'src/renderer/service-worker',
      appTemplate: 'src/renderer/app.html',
      errorTemplate: 'src/renderer/error.html'
    },

    alias: {
      '@': resolve('./src/renderer')
    }
  }
}

export default config

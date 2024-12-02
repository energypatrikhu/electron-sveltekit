import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
// @ts-ignore
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    plugins: [sveltekit()]
  }
})

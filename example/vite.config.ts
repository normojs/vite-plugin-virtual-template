import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Virtual from 'vite-plugin-virtual'
import Markdown from 'vite-plugin-md'
import Restart from 'vite-plugin-restart'
import Pages from 'vite-plugin-pages'
const { resolve } = require('path')
const config = defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
    }),
    // TODO: [vite-plugin-virtual](https://github.com/patak-js/vite-plugin-virtual)
    Virtual({
      storeDir: 'src/store',
      extensions: ['ts', 'js'],
    }),
    Markdown(),
    Restart({
      restart: ['../../dist/*.js'],
    }),
  ],
})

export default config

import { createApp } from 'vue'

import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'

import * as App2 from 'vite-plugin-virtual'

// import App from './App.vue'
// console.log(App, App2)
import './index.css'

const router = createRouter({
  // ...
  history: createWebHistory(),
  routes,
})

const app = createApp(App2)

app.use(router)
app.mount('#app')

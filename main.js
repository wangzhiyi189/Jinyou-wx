import { createSSRApp } from 'vue'
import App from './App.vue'
import store from './store'
import uViewPlus from 'uview-plus'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(uViewPlus)
  return { app }
}

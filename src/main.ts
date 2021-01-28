import './lib/language.scss'
import './index.scss'
import App from './App.vue'
import { createApp } from 'vue'
import 'github-markdown-css'
// 引入Markdown组件
import Markdown from './components/Markdown.vue'
import Demo from './components/Demo.vue'

import {
  wySwitch,
  wyButton,
  wyTabs,
  wyTab,
  wyDialog,
  wyInput,
  wyLayout,
  wyHeader,
  wyContent,
  wyFooter,
  wyAside,
} from './lib/index'

import { router } from './router'

// 使用router
const app = createApp(App)
app.use(router)

app.mount('#app')
// 全局注册组件
app.component('Markdown', Markdown)
app.component('Demo', Demo)

app.component('wy-switch', wySwitch)
app.component('wy-button', wyButton)
app.component('wy-tabs', wyTabs)
app.component('wy-tab', wyTab)
app.component('wy-input', wyInput)
app.component('wy-dialog', wyDialog)
app.component('wy-layout', wyLayout)
app.component('wy-header', wyHeader)
app.component('wy-content', wyContent)
app.component('wy-footer', wyFooter)
app.component('wy-aside', wyAside)

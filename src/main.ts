import './lib/language.scss'
import './index.scss'
import App from './App.vue'
import { createApp } from 'vue'
import 'github-markdown-css'
// 引入Markdown组件
import Markdown from './components/Markdown.vue'
import Demo from './components/Demo.vue'

import { Switch, Button, Tabs, Tab, Dialog, Input } from './lib/index'

import { router } from './router'

// 使用router
const app = createApp(App)
app.use(router)
app.mount('#app')
// 全局注册组件
app.component('Markdown', Markdown)
app.component('Demo', Demo)
app.component('wy-switch', Switch)
app.component('wy-button', Button)
app.component('wy-tabs', Tabs)
app.component('wy-tab', Tab)
app.component('wy-dialog', Dialog)
app.component('wy-input', Input)

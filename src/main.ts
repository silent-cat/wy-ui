import './lib/language.scss'
import './index.scss'
import App from './App.vue'
import { createApp } from 'vue'
import 'github-markdown-css'
// 引入Markdown组件
import Markdown from './components/Markdown.vue'



import { router } from './router'




// 使用router
const app = createApp(App)
app.use(router)
app.mount('#app')
// 全局注册组件
app.component("Markdown",Markdown)


import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'


import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import Intro from './views/Intro.vue'
import Start from './views/Start.vue'
import Install from './views/Install.vue'

import { h } from 'vue'
import Markdown from './components/Markdown.vue'
import intro from './markdown/intro.md'
import install from './markdown/Install.md'
import start from './markdown/start.md'



// 路由系列操作
import {createWebHashHistory,createRouter} from 'vue-router'

// 新建history
const history = createWebHashHistory()
// 新建router
const md = string=>h(Markdown,{content:string,key:string})
export const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:Home},
        {path:'/doc',component:Doc, 
            children:[
                {path:"",redirect:'/doc/intro'},
                // 第一次
                // {path:"intro",component:Intro},
                //第二次 将md文件直接匹配路由，可以删除带掉.md文件对应的路由组件
                //  {path:"intro",component:h(Markdown,{path:'../markdown/intro.md',key:1})},
                // 最终 
                {path:'intro',component:md(intro)},
                {path:'install',component:md(install)},
                {path:'start',component:md(start)},
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabsDemo},
            ]
        },
    ]
})

router.afterEach(()=>{
    // console.log('路由切换了');
    
})
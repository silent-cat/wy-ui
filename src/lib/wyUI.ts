import Dialog from './Dialog.vue'
import Button from './Button.vue'
import Switch from './Switch.vue'
import Tabs from './Tabs.vue'
import Tab from './Tab.vue'
import Input from './Input.vue'
import Layout from './Layout.vue'
import Header from './Header.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'
import Aside from './Aside.vue'
import { ComponentOptions } from 'vue'

export default {
  install: (app: ComponentOptions) => {
    // Plugin code goes here

    app.component('wy-button', Button)
    app.component('wy-switch', Switch)
    app.component('wy-dialog', Dialog)
    app.component('wy-tabs', Tabs)
    app.component('wy-tab', Tab)
    app.component('wy-input', Input)
    app.component('wy-layout', Layout)
    app.component('wy-header', Header)
    app.component('wy-content', Content)
    app.component('wy-footer', Footer)
    app.component('wy-aside', Aside)
  },
}

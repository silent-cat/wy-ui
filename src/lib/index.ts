export { default as wySwitch } from './Switch.vue'
export { default as wyButton } from './Button.vue'
export { default as wyTabs } from './Tabs.vue'
export { default as wyTab } from './Tab.vue'
export { default as wyDialog } from './Dialog.vue'
export { openDialog as openDialog } from './openDialog'
export { default as wyInput } from './Input.vue'
export { default as wyLayout } from './Layout.vue'
export { default as wyContent } from './Content.vue'
export { default as wyHeader } from './Header.vue'
export { default as wyFooter } from './Footer.vue'
export { default as wyAside } from './Aside.vue'

// // src/index.js 示例，主要是引入(import)组件再导出(export)，包括Vue.use所需的 install函数处理
// import wyButton from './Button.vue'
// import wySwitch from './Switch.vue'
// import wyTabs from './Tabs.vue'
// import wyTab from './Tab.vue'
// import wyDialog from './Dialog.vue'
// import wyInput from './Input.vue'
// import wyLayout from './Layout.vue'
// import wyContent from './Content.vue'
// import wyHeader from './Header.vue'
// import wyFooter from './Footer.vue'
// import wyAside from './Aside.vue'
// // import openDialog from './openDialog'
// const components = [
//   wyButton,
//   wySwitch,
//   wyTabs,
//   wyTab,
//   wyDialog,
//   wyInput,
//   wyLayout,
//   wyContent,
//   wyHeader,
//   wyFooter,
//   wyAside,
// ]

// // Vue.use() 一次性安装所有组件
// const install = function (Vue) {
//   if (install.installed) return
//   components.forEach((component) => Vue.use(component))
//   // 如果没有在src/index.js里实现install方法，就需要使用下面的
//   // components.forEach(component => Vue.component(component.name, component))
// }

// // 直接给浏览器或 AMD loader 使用
// if (typeof window !== undefined && window.Vue) {
//   window.Vue.use(install)
//   if (install.installed) {
//     install.installed = false
//   }
// }

// export default {
//   install, // 用于ES modules，import Vue 后直接使用 Vue.use()
//   ...components, // 支持解构赋值按需引入单个组件
// }

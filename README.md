# 物语UI
### 一款使用Vue3和Typescript实现的UI组件库
官网地址：https://silent-cat.github.io/wy-ui-website/  支持PC端和移动端查看

### 安装
```
yarn add wy-ui-1或者npm install wy-ui-1
```
### 使用,目前仅支持全局引入
main.js
```
import { createApp } from "vue";
import App from "./App.vue";
import { wyUI } from "wy-ui-1";
import "wy-ui-1/dist/lib/wy.css";

const app = createApp(App);
app.use(wyUI);
app.mount("#app");
```

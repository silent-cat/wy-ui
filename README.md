# 物语 UI

## 介绍

一款使用 Vue3 和 Typescript 实现的 UI 组件库，为个人学习 Vue3 和 Typescript 的产物

官网地址：https://silent-cat.github.io/wy-ui-website/ 支持 PC 端和移动端查看

## 开始使用

### 安装

```
yarn add wy-ui-1或者npm install wy-ui-1
```
<<<<<<< HEAD

### 全局引入

=======
### 支持全局引入
>>>>>>> 80f3143ba6af32d7733330e2c71ded61733900be
main.js

```
import { createApp } from "vue";
import App from "./App.vue";
import { wyUI } from "wy-ui-1"; //引入wyUI,
import "wy-ui-1/dist/lib/wy.css";//引入样式

const app = createApp(App);
app.use(wyUI);//注册wyUI,接下来直接复制官网示例就可以使用该UI库的全部组件了
app.mount("#app");
```
### 支持按需引入
main.js
```
import { createApp } from "vue";
import App from "./App.vue";
import { wySwitch } from "wy-ui-1";
import "wy-ui-1/dist/lib/wy.css";

const app = createApp(App);
app.component("wy-switch", wySwitch);//可自定义组件名称
app.mount("#app");
```

### 局部引入

```
import { createApp } from "vue";
import App from "./App.vue";
import { Switch } from "wy-ui-1";
import "wy-ui-1/dist/lib/wy.css";

const app = createApp(App);
app.component('wy-switch',Switch);
app.mount("#app");
```

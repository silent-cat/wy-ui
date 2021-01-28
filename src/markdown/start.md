# 开始使用

请先[<font color=#ff6721>安装</font>](#/doc/install)组件库

全局引入

```
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import { wyUI } from "wy-ui-1";
import "wy-ui-1/dist/lib/wy.css";

const app = createApp(App);
app.use(wyUI);
app.mount("#app");
```

这样，直接复制组件列表中的组件代码就可以使用了。

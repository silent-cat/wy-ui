# 开始使用

请先[<font color=#ff6721>安装</font>](#/doc/install)组件库
注：目前仅支持单文件按需引入

```
import {wyButton} from "wy-ui"
```

代码示例

```
<template>
  <wy-switch v-model:value="value" />
</template>

<script lang="ts">
// 从UI库引入组件
import { wySwitch } from "wy-ui-1";
// 引入组件库的样式文件
import "wy-ui-1/dist/lib/wy.css";

export default {
  components: {
    // 注册组件
    wySwitch,
  },
  data() {
    return {
      value: false,
    };
  },
};
</script>
```

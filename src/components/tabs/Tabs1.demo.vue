<demo>
基本用法
</demo>
<template>
  <wy-tabs v-model:selected="x">
    <wy-tab title="导航一">内容一</wy-tab>
    <wy-tab title="导航二">内容二</wy-tab>
    <wy-tab title="导航三">内容三。。。。。。。。。。。。</wy-tab>
  </wy-tabs>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const x = ref('导航一')
    return { x }
  },
}
</script>

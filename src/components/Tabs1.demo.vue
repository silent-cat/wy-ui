<demo>
基本用法
</demo>
<template>
  <div>Tabs 示例</div>
  <h1>示例1</h1>
  <wy-tabs v-model:selected="x">
    <wy-tab title="导航一">内容一</wy-tab>
    <wy-tab title="导航二">内容二</wy-tab>
    <wy-tab title="导航三">内容三。。。。。。。。。。。。</wy-tab>
  </wy-tabs>
</template>

<script>
import wyTabs from '../lib/wyTabs.vue'
import wyTab from '../lib/wyTab.vue'
import { ref } from 'vue'
export default {
  components: {
    wyTabs,
    wyTab
  },
  setup(){
    const x = ref('导航一')
    return {x}
  }
}
</script>

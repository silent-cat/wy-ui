<demo>
基本用法
</demo>
<template>
  <wy-button @click="toggle">点击打开</wy-button>
  <wy-dialog
    v-model:visible="show"
    :confirm="f1"
    :cancel="f2"
    :closeOnClickOverlay="false"
  >
    <template v-slot:content>
      <p>欢迎使用物语UI</p>
      <p>不足之处，请多多包涵</p>
    </template>
    <template v-slot:title> 提示 </template>
  </wy-dialog>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const show = ref(false)
    const toggle = () => {
      show.value = !show.value
    }
    const f1 = () => {
      return true
    }
    const f2 = () => {
      console.log('f2')
    }
    return { show, toggle, f1, f2 }
  },
}
</script>

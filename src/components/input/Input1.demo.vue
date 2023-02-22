<demo>
同步输入框
</demo>

<template>
  <wy-input v-model:value="value" placeholder="请输入内容" />
  <wy-input :value="value" />
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const value = ref(null)
    return { value }
  },
}
</script>

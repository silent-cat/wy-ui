<demo>
基本用法
</demo>
<template>
  <wy-switch v-model:value="checked" />
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const checked = ref(false)
    return { checked }
  },
}
</script>

<demo>
禁用
</demo>
<template>
  <wy-switch v-model:value="checked1" disabled />
  <wy-switch v-model:value="checked2" disabled />
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const checked1 = ref(false)
    const checked2 = ref(true)
    return { checked1, checked2 }
  },
}
</script>

<demo>
尺寸
</demo>
<template>
  <wy-switch v-model:value="checked1" size="mini" />
  <wy-switch v-model:value="checked2" size="normal" />
  <wy-switch v-model:value="checked3" size="large" />
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const checked1 = ref(true)
    const checked2 = ref(true)
    const checked3 = ref(true)
    return { checked1, checked2, checked3 }
  },
}
</script>

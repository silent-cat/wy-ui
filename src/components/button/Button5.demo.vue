<demo>
加载
</demo>
<template>
  <wy-button loading>加载中</wy-button>
  <wy-button @click="onClick" :loading="isLoading">点击加载</wy-button>
</template>
<script>
import { ref } from 'vue'
export default {
  setup() {
    const isLoading = ref(false)
    const onClick = () => {
      isLoading.value = !isLoading.value
    }
    return { isLoading, onClick }
  },
}
</script>

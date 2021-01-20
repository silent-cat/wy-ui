<demo>
加载
</demo>
<template>
  <wy-button loading>加载中</wy-button>
  <wy-button @click="onClick" :loading="isLoading">点击加载</wy-button>
</template>
<script lang="ts">
import { ref } from "vue";
import wyButton from "../lib/wyButton.vue";
export default {
  components: {
    wyButton,
  },
  setup() {
    const isLoading = ref(false);
    const onClick = () => {
      isLoading.value = !isLoading.value;
    };
    return { isLoading, onClick};
  }
};
</script>

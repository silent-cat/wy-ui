<demo>
禁用
</demo>
<template>
  <wy-button disabled>禁用按钮</wy-button>
  <wy-button theme="link" disabled>禁用链接</wy-button>
  <wy-button theme="text" disabled>禁用文字</wy-button>
</template>
<script lang="ts">
import wyButton from "../lib/wyButton.vue";
export default {
  components: {
    wyButton
  },
};
</script>

<demo>
一键开启对话框
</demo>
<template>
  <wy-button @click="showDialog">点击打开</wy-button>
</template>
<script lang="ts">
import wyButton from "../lib/wyButton.vue";
import {openDialog} from '../lib/openDialog';
export default {
  components: {
    wyButton,
  },
  setup() {
    const showDialog = ()=>{
      openDialog({
        title:'标题',
        content:'这是一段内容',
        confirm(){console.log('confirm')},
        cancel(){console.log('cancel')}
      })
    }
    return {showDialog};
  },
};
</script>
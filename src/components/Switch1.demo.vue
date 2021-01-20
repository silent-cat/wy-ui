<demo>
基本用法
</demo>
<template>
    <wy-switch v-model:value="checked"/>
</template>
<script lang="ts">
import { ref } from 'vue'
import wySwitch from '../lib/wySwitch.vue'
export default {
 components:{
     wySwitch
 },
 setup(){
     const checked = ref(false)
     return {checked}
 }
}
</script>
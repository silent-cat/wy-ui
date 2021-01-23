<template>
  <Demo :component="Layout1Demo"></Demo>
  <Demo :component="Layout2Demo"></Demo>
  <Demo :component="Layout3Demo"></Demo>
</template>

<script lang="ts">
import Layout1Demo from '../layout/Layout1.demo.vue'
import Layout2Demo from '../layout/Layout2.demo.vue'
import Layout3Demo from '../layout/Layout3.demo.vue'
export default {
  setup() {
    return { Layout1Demo, Layout2Demo, Layout3Demo }
  },
}
</script>

<style></style>

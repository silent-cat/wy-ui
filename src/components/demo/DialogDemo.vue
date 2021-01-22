<template>
  <div>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
  </div>
</template>

<script lang="ts">
import Dialog1Demo from '../dialog/Dialog1.demo.vue'
import Dialog2Demo from '../dialog/Dialog2.demo.vue'

export default {
  setup() {
    return { Dialog1Demo, Dialog2Demo }
  },
}
</script>

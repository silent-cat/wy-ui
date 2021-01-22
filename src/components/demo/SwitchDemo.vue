<template>
  <!-- <Switch :value="y" @update:value="y = $event"/> -->
  <!-- <Switch v-model:value="bool" /> -->
  <div>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template>

<script lang="ts">
import Switch1Demo from '../switch/Switch1.demo.vue'
import Switch2Demo from '../switch/Switch2.demo.vue'

export default {
  setup() {
    return { Switch1Demo, Switch2Demo }
  },
}
</script>

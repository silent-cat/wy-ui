<template>
  <!-- <Switch :value="y" @update:value="y = $event"/> -->
  <!-- <Switch v-model:value="bool" /> -->
  <div>
    <Demo :component="Switch1Demo" />
    <Demo :component="Switch2Demo" />
  </div>
</template>

<script lang="ts">
import Switch1Demo from "./Switch1.demo.vue";
import Switch2Demo from "./Switch2.demo.vue";
import Demo from './Demo.vue'

export default {
  setup() {
    return { Switch1Demo, Switch2Demo};
  },
  components: {
    Demo
  },
};
</script>


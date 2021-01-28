<template>
  <main class="wy-layout-content">
    <slot></slot>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
.wy-layout-content {
  flex-grow: 1;
  height: 160px;
  line-height: 160px;
  background: #ff8f5b;
  text-align: center;
}
</style>

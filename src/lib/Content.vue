<template>
  <main class="language-layout-content">
    <slot></slot>
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss">
.language-layout-content {
  flex-grow: 1;
  height: 160px;
  line-height: 160px;
  background: #ff6721;
  text-align: center;
}
</style>

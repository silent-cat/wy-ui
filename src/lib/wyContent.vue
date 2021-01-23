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
  height: 128px;
  line-height: 128px;
  background: #ff6721;
  text-align: center;
}
</style>

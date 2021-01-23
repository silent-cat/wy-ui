<template>
  <section class="language-layout">
    <slot></slot>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.language-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  color: #fff;
}
</style>

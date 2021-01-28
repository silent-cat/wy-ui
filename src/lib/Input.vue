<template>
  <input
    type="text"
    class="wy-input"
    :value="value"
    @input="$emit('update:value', $event.target.value)"
  />
</template>
<script lang="ts">
export default {
  props: {
    value: String,
  },
}
</script>
<style lang="scss">
$border-color1: #ccc;
$border-color2: #ff6721;
.wy-input {
  display: block;
  padding: 0 15px;
  margin-bottom: 10px;
  height: 40px;
  border: 2px solid $border-color1;
  cursor: pointer;
  // outline: none;
  border-radius: 4px;
  transition: all 250ms;
  &:focus {
    outline-color: $border-color2;
  }
  &[disabled] {
    cursor: not-allowed;
  }
}
</style>

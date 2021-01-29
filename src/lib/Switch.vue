<template>
  <button @click="toggle" class="wy-switch" :class="{ 'wy-checked': value }">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    value: Boolean,
    size: {
      type: String,
      default: 'normal',
    },
  },

  setup(props, context) {
    // 切换开关
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
  },
}
</script>

<style lang="scss">
$h: 22px;
$w: 44px;
$h3: $h - 4px;
$color: #ff6721;
$shadow: rgba(0, 0, 0, 0.836);
.wy-switch {
  position: relative;
  height: $h;
  width: $w;
  border: none;
  outline: none;
  background-color: #bfbfbf;
  border-radius: $h/2;
  & + & {
    margin-left: 16px;
  }
  &:hover {
    cursor: pointer;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }
  &[disabled]:active {
    > span {
      width: $h3;
    }
  }
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h3;
    height: $h3;
    background-color: #fff;
    border-radius: $w/4;
    box-shadow: $shadow 0px 0px 2px;
    //   实现动画
    transition: all 250ms;
  }
  &.wy-checked {
    background-color: $color;
    > span {
      left: calc(100% - #{$w/2} + 2px);
    }
  }
  &:active {
    > span {
      width: $w/2;
    }
  }
  &.wy-checked:active {
    > span {
      width: $w/2;
      margin-left: -4px;
    }
    &[disabled]:active {
      > span {
        width: $h3;
        margin-left: 0px;
      }
    }
  }
}
</style>

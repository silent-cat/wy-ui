<template>
  <template v-if="visible">
    <!-- Teleport内置组件，传到body下面 把Dialog移到body下面-->
    <Teleport to="body">
      <div class="wy-dialog-overlay" @click="onClickOverlay"></div>
      <div class="wy-dialog-wrapper">
        <div class="wy-dialog">
          <header>
            <!-- 具名插槽 -->
            <slot name="title" />
            <span @click="close" class="wy-dialog-close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <wy-button @click="cancel">取消</wy-button>
            <wy-button @click="confirm" level="warn">确定</wy-button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import wyButton from './Button.vue'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    confirm: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close()
      }
    }
    const confirm = () => {
      if (props.confirm && props.confirm() !== false) {
        close()
      }
    }
    const cancel = () => {
      props.cancel && props.cancel()
      close()
    }
    return { close, onClickOverlay, confirm, cancel }
  },
  components: {
    wyButton,
  },
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.wy-dialog {
  // padding: 10px 0 10px 0;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  background-color: #fff;
  border-radius: $radius;
  border: 1px solid #000;
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 1;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  //   X
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>

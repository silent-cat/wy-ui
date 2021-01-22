<template>
  <!-- <div :size="size">
    <button v-bind="rest">
      <slot />
    </button>
  </div> -->
  <button class="language-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="language-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  //   inheritAttrs: false, //继承属性改成false，取消自动绑定事件
  // props和attrs的区别
  // 1.props必须先声明才能取值
  // 2.props不能包含事件
  // 3.attrs只有string类型，props支持多种类型
  props: {
    // size: String,
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      defalut: 'normal',
    },
    level: {
      type: String,
      default: 'normal',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level, disabled } = props
    // console.log(disabled);
    if (disabled === true) {
    }
    const classes = computed(() => {
      return {
        [`language-theme-${theme}`]: theme,
        [`language-size-${size}`]: size,
        [`language-level-${level}`]: level,
      }
    })
    return { classes }
  },
  //   setup(props, context) {
  //     console.log({ ...props });//不声明的话打印出来的是个空对象
  //     console.log({...context.attrs});//如果props没有声明的属性，会在attrs显示
  //     const { size, ...rest } = context.attrs;
  //     return { size, rest };
  //   },
}
</script>

<style lang="scss">
// ui库的css样式
// 1.不能使用scoped
// 因为data-v-xxx中的xxx每次运行可能不同，必须输出稳定不变的class选择器，方便使用者覆盖
// 2.必须加前缀
// 避免被使用者覆盖

// css最小影响原则：绝对不能影响库的使用者
$color: #ff6721;
.language-button {
  background-color: #fff;
  outline: none;
  border: 1px solid #d9d9d9;
  height: 30px;
  padding: 0px 15px;
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  border-radius: 4px;
  transition: all 250ms;

  &:hover {
    color: $color;
    border-color: $color;
  }
  & + & {
    margin-left: 16px;
  }

  // 控制按钮种类
  &.language-theme-link {
    border: none;
    border-radius: 0;
    background-color: #fff;
    border-bottom: 1px solid;
    outline: none;
  }
  &.language-theme-text {
    border: none;
    background-color: #fff;
    outline: none;
  }
  // 控制按钮大小
  &.language-size-small {
    font-size: 12px;
    height: 24px;
    padding: 0 12px;
  }
  &.language-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 24px;
  }
  //控制按钮等级
  &.language-level-primary {
    background-color: #1890ff;
    color: #fff;
    border: none;
    &:hover {
      opacity: 0.6;
    }
  }
  &.language-level-success {
    background-color: #67c23a;
    color: #fff;
    border: none;
    &:hover {
      opacity: 0.6;
    }
  }
  &.language-level-info {
    background-color: #909399;
    color: #fff;
    border: none;
    &:hover {
      opacity: 0.6;
    }
  }
  &.language-level-warn {
    background-color: $color;
    color: #fff;
    border: none;
    &:hover {
      opacity: 0.6;
    }
  }
  &.language-level-danger {
    background-color: #f56c6c;
    color: #fff;
    border: none;
    &:hover {
      opacity: 0.6;
    }
  }
  // 禁用
  &.language-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: #ccc;
      &:hover {
        border-color: #ccc;
      }
    }
  }
  &.language-theme-link,
  &.language-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: #ccc;
    }
  }

  //   加载的样式
  > .language-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 6px;
    border-radius: 14px;
    border-color: $color $color $color transparent;
    border-style: solid;
    border-width: 2px;
    animation: language-spin 1s infinite linear;
  }
}

@keyframes language-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

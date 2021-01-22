<template>
  <div class="language-tabs">
    <div class="language-tabs-nav" ref="container">
      <div
        class="language-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el
          }
        "
        :class="{ selected: t === selected }"
        @click="select(t)"
      >
        {{ t }}
      </div>

      <div class="language-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="language-tabs-content">
      <component
        class="language-tabs-content-item"
        v-for="(c, index) in defaults"
        :is="c"
        :key="index"
        :class="{ selected: c.props.title === selected }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, onUpdated, ref, watchEffect } from 'vue'
import wyTab from './wyTab.vue'
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    // const navItems = ref<HTMLDivElement[]>([]);
    const selectedItem = ref<HTMLDivElement>(null) // ts的泛型
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    // 移动滑块
    const move = () => {
      //  const divs = navItems.value;
      // 获取到被选中的元素
      // const result = divs.filter((div) =>
      //   div.classList.contains("selected")
      // )[0];

      //getBoundingClientRect获取元素的宽高和位置，width，height,top,left
      // 获取被选中元素的宽度
      const { width } = selectedItem.value.getBoundingClientRect()
      indicator.value.style.width = width + 'px'

      // 获取到container的left，重命名
      const { left: left1 } = container.value.getBoundingClientRect()
      const { left: left2 } = selectedItem.value.getBoundingClientRect()

      const left = left2 - left1
      indicator.value.style.left = left + 'px'
    }
    // 挂载之后
    // onMounted(move); //第一次渲染时执行执行
    // onUpdated(move); //更新时执行
    // watchEffect(move)代替onMountedh和onUpdated,在挂载之前也会运行,但是会报错，因为挂载前selectedItem，indicator他们是空的
    // 解决办法 文档中详细说明，用下面这种写法来规避watchEffect在挂载前也会执行的行为
    onMounted(() => {
      watchEffect(move, { flush: 'post' })
    })
    // 使用js获取插槽内容context.slots.default()
    const defaults = context.slots.default()
    // 判断使用者是否使用组件库规定的类型Tab,确认子组件的类型
    defaults.forEach((tag) => {
      if (tag.type !== wyTab) {
        throw new Error('Tabs 子标签必须是Tab')
      }
    })

    const titles = defaults.map((tag) => {
      return tag.props.title
    })

    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    // console.log(defaults[0].type === Tab);
    return { defaults, titles, select, selectedItem, indicator, container }
  },
}
</script>

<style lang="scss">
$color: #ff6721;
.language-tabs {
  width: 100%;
  &-nav {
    position: relative;
    display: flex;
    border-bottom: 2px solid #ccc;
    &-item {
      cursor: pointer;
      margin-left: 20px;
      &.selected {
        color: $color;
      }
    }
    &-indicator {
      position: absolute;
      height: 2px;
      background-color: $color;
      left: 0;
      bottom: -2px;
      width: 160px;
      transition: all 250ms;
    }
  }
  &-content {
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>

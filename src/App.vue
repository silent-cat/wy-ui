<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { provide, ref } from 'vue'
import { router } from './router'
export default {
  name: 'App',
  setup() {
    // 获取到屏幕宽度
    const width = document.documentElement.clientWidth
    // 存放一个menuVisible
    const menuVisible = ref(width <= 500 ? false : true)
    // 标记menuVisible可以让后代使用
    provide('menuVisible', menuVisible)
    // 每次切换路由关闭aside侧边栏
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false
      }
    })
  },
}
</script>

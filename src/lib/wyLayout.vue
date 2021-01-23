<template>
  <section class="language-layout" :class="{ hasAside: bool }">
    <slot></slot>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  setup(props, context) {
    const bool = ref(false)
    onMounted(() => {
      // context.slots.default().forEach((item) => {
      //   console.log(item.type.name)
      //   if (item.type === wyAside) {
      //     bool.value = true
      //   }
      // })
      const tags = context.slots.default()
      tags.forEach((tag) => {
        console.log(tag.type.__hmrId)
        if (tag.type.__hmrId === '/src/lib/wyAside.vue') {
          bool.value = true
        }
      })
    })
    return { bool }
  },
}
</script>

<style lang="scss">
.language-layout {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  color: #fff;
}
.hasAside {
  flex-direction: row;
}
</style>

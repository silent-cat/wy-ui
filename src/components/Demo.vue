<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component"></component>
    </div>
    <div class="demo-actions">
      <wy-button @click="showCode" v-if="!codeVisible">查看代码</wy-button>
      <wy-button @click="hideCode" v-else>隐藏代码</wy-button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <pre class="wy-html" v-html="html"></pre>
    </div>
  </div>
</template>

<script lang="ts">
import wyButton from '../lib/Button.vue'
import 'prismjs' //用于高亮源代码
import 'prismjs/themes/prism-tomorrow.css' //引入主题样式
import { computed, ref } from 'vue'
const Prism = (window as any).Prism
export default {
  components: {
    wyButton,
  },
  props: {
    component: Object,
  },
  setup(props) {
    const html = computed(() =>
      Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        'html'
      )
    )
    const showCode = () => {
      codeVisible.value = true
    }
    const hideCode = () => {
      codeVisible.value = false
    }
    const codeVisible = ref(false)
    return { Prism, html, codeVisible, showCode, hideCode }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    // overflow: scroll;
    @media screen and (max-width: 500px) {
      overflow-x: scroll;
    }
    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
      width: 80vw;
    }
  }
}
</style>

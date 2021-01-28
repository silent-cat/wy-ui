<template>
  <div class="wrap">
    <top-bar />
    <div class="content">
      <h1>物语UI</h1>
      <h4 class="intro">基于Vue3和Typescript实现的UI组件库</h4>
      <p class="actions">
        <router-link to="/doc/intro" class="start">起步</router-link>
        <a href="https://github.com/silent-cat/wy-ui" class="github">github</a>
      </p>
    </div>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>使用 Vue 3 Composition API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript</h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-dengpao"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import TopBar from '../components/TopBar.vue'
export default {
  data() {
    return {}
  },
  components: {
    TopBar,
  },
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.wrap {
  overflow: hidden;
}
.content {
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100vw;
  padding-top: 120px;
  padding-bottom: 100px;
  background-color: rgba(204, 204, 204, 0.082);
  clip-path: 10px;
  > .intro {
    margin: 24px 0;
  }
  > .actions {
    a {
      display: inline-block;
      margin: 10px;
      width: 160px;
      height: 45px;
      text-align: center;
      line-height: 45px;
      border-radius: 10px;
      border: 2px solid;
      transition: all 250ms;
      @media (max-width: 500px) {
        display: block;
        margin-left: 50%;
        transform: translateX(-50%);
      }
    }
    > .start:hover,
    > .github:hover {
      color: #ff6721;
      background-color: #ff672125;
    }
  }
}
.features {
  margin: 32px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 768px;
    > ul {
      justify-content: start !important;
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3%;
      }
    }
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>

<template>
  <div class="layout">
    <top-bar class="top-bar" toggleMenuButtonVisible />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/start">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import TopBar from "../components/TopBar.vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return { menuVisible };
  },
  data() {
    return {};
  },
  components: {
    TopBar,
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.router-link-active {
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .top-bar {
    flex-shrink: 0;
  }
  // 对子元素使用padding挤到一边
  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 160px;

    @media (max-width: 500px) {
      padding-left: 0;
    }

    > aside {
      flex-direction: 0;
      position: fixed;
      z-index: 8;
      top: 0;
      left: 0;
      color: #fff;
      background-color: rgb(248, 104, 99);
      padding: 80px 28px 28px 20px;
      height: 100vh;
      > ol {
        > li {
          > a {
            display: block;
            padding: 6px 0;
          }
          .router-link-active {
            color:#ff0000;
            font-weight:bolder;
          }
        }
      }

      @media (max-width: 500px) {
        position: fixed;
        top: 0;
        left: 0;
        padding-top: 60px;
      }
    }
    > main {
      flex-grow: 1;
      margin-top: 10px;
      @media (max-width: 500px) {
        margin-left: 10px;
      }
    }
  }
}
</style>

<template>
  <div class="topBar">
    <router-link to="/" class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ziran"></use>
      </svg>
    </router-link>
    <router-link to="/doc" class="menu">文档</router-link>
    <svg
      v-if="toggleMenuButtonVisible"
      class="toggleAside icon"
      @click="toggleMenu"
      toggleAsideVisible
    >
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    // 获取App.vue中的menuVisible
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    // 点击改变menuVisible的值
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
  data() {
    return {};
  },
  components: {},
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.topBar {
  // border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(243, 155, 104);
  color: #fff;
  padding: 0px 60px;
  height: 60px;
  position: fixed;
  width: 100vw;
  z-index: 9;

  > .logo {
    font-size: 48px;
  }
  > .toggleAside {
    // display: inline-block;
    // width: 24px;
    // height: 24px;
    // background-color: rgb(241, 199, 120);
    font-size:28px;
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    /* 隐藏右侧菜单 */
    > .menu {
      display: none;
    }
    /* 让logo居中 */
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>

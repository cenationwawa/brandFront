<template>
  <header>
    <div class="icon">这是图标</div>
    <router-link to="/main">首页</router-link>
    <router-link to="/product">关于我们</router-link>
  </header>
  <!-- <van-tabbar v-model="active"> -->
  <!-- <van-tabbar-item icon="home-o" to="/main">标签</van-tabbar-item>
  <van-tabbar-item icon="search" to="/product">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item> -->
<!-- </van-tabbar> -->

  <router-view />
</template>

<script setup lang="ts">
import { ref } from "vue"
const active = ref(0);
</script>

<style lang="scss" scoped>
header{
  width: 100%;
  background-color: #cccf60;
  .icon{
  width: 40px;
  height: 40px;
  background-color: #fff;
}
}
</style>

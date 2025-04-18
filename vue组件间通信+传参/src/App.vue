<template>

<div>
  <h1>各种Vue组件间通信/传值</h1>
  <h3 style="margin-top: 20px;">演示：
    <router-link to="/props_pre">props</router-link>
    <router-link style="margin: 0 20px;" to="/custom_event">custom_event(自定义事件)</router-link>
    <router-link to="/event_bus">event_bus(全局事件总线)</router-link>
    <router-link style="margin: 0 20px;" to="/v-model">v-model</router-link>
    <router-link to="/attrs-listeners">useAttrs</router-link>
    <router-link style="margin: 0 20px;" to="/ref-children-parent">ref$parent</router-link>
    <router-link to="/provide-inject">provide-inject</router-link>
    <router-link style="margin: 0 20px;" to="/pinia">pinia</router-link>
    <router-link to="/slot">slot</router-link>
  </h3>
  <router-view></router-view>
</div>

</template>

<script setup lang='ts'>
// import { ref,reactive } from 'vue'

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
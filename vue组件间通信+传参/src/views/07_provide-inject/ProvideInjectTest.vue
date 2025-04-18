<template>

  <h2>provide-inject</h2>
  <div class="box">
    <h2>我的座驾：{{ car }}</h2>
    <hr>
    <div class="content">
      <Child ref="son"></Child>
    </div>
  </div>

</template>

<script setup lang='ts'>
// 引入子组件
import Child from './Child.vue';
// vue3提供了provide(提供)和inject(注入)两个api，
// 通过这两个api可以实现跨级组件之间的通信，
import { ref,provide } from 'vue';
let car = ref('宝马'); // 定义一个响应式数据，作为父组件提供给子组件的数据

// 祖先组件给后代组件提供数据
// provide(提供数据的key,提供的数据)
provide('TOKEN', car); // 通过provide提供数据，key为'TOKEN'，值为car

</script>
<style scoped>
.box {
  width: 1000px;
  height: 400px;
  background-color: blueviolet;
}
.content{ 
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
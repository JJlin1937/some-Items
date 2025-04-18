<template>

  <div class="box">
    <h1>props 我是父组件曹操</h1>
    <hr>
    <Child info="我是曹操" :moneny="moneny"></Child>
  </div>

</template>

<script setup lang='ts'>
// props：可以实现父子组件通信，props数据只读
// props：父组件传递给子组件的数据，子组件不能修改props数据
import Child from './Child.vue'
import { ref, } from 'vue'

let moneny = ref(1000) // 响应式数据

</script>
<style scoped>
.box {
  width: 100vw;
  height: 400px;
  background-color: yellowgreen;
}
</style>
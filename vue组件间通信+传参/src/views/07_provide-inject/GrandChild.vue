<template>

  <div class="grandson">
    <h3>我是孙子</h3>
    <p>{{car}}</p>
    <button @click="updateCar">我想换车</button>
  </div>

</template>

<script setup lang='ts'>
import { ref,inject } from 'vue'
// 注入入祖先组件传递过来的数据
// 需要参数：即祖先组件的key
const car = inject('TOKEN')
console.log('孙子组件接收到的祖先组件传递过来的数据：', car);

// 事件处理
const updateCar = () => {
  car.value = '保时捷';
}
</script>
<style scoped>
.grandson {
  width: 200px;
  height: 200px;
  background-color: lightblue;
}
</style>
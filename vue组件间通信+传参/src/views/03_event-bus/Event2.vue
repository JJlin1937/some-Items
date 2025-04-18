<template>

  <div class="son">
    <p>我是子组件2：曹丕</p>
    <button @click="handler">点击我给曹植送一首诗</button>
  </div>

</template>

<script setup lang='ts'>
import $bus from '../../bus';

const handler = () => {
  // 发送事件
  // 第一个参数：事件类型，第二个参数：事件携带的数据
  $bus.emit('sendPoem', '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。');
};
</script>
<style scoped>
.son {
  width: 400px;
  height: 200px;
  background-color: steelblue;
}
</style>
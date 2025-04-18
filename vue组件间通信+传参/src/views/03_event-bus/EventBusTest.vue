<template>

  <div class="event-bus">
    <h1>全局事件总线 $bus</h1>
    <hr>
    <div class="content">
      <Event1></Event1>
      <Event2></Event2>
    </div>
  </div>

</template>

<script setup lang='ts'>
// 引入子组件
import Event1 from './Event1.vue'
import Event2 from './Event2.vue'



</script>
<style scoped>
.event-bus{
  width: 100vh;
  height: 400px;
  background-color: yellowgreen;
}
.content{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
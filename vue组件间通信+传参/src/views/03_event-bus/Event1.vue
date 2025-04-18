<template>

  <div class="son">
    <p>我是子组件1：曹植</p>
    <h3>我兄弟曹丕送我的诗：{{ poem }}</h3>
  </div>

</template>

<script setup lang='ts'>
// 引入全局事件总线
import $bus from '../../bus';
// 组合式api函数
import { onMounted,ref } from 'vue';

const poem = ref(''); // 定义一个响应式数据，用来接收兄弟组件传递过来的数据
// 组件挂载完毕后，当前组件绑定一个事件，接受将来兄弟组件传递过来的数据
onMounted(() => {
  // 监听事件
  // 第一个参数：事件类型，第二个参数：回调函数
  $bus.on('sendPoem', (receivedPoem: string) => {
    console.log('曹丕给我送了一首诗：' + receivedPoem);
    poem.value = receivedPoem; // 将兄弟组件传递过来的数据赋值给当前组件的响应式数据
  });
});

</script>
<style scoped>
.son {
  width: 400px;
  height: 200px;
  background-color: seagreen;
}
</style>
<template>

  <div class="child1">
    <h2>{{ infoStore.count }}</h2>
    <span @click="updateTodo">{{ todoStore.arr }} <- -> 数组和为：{{ todoStore.total }}</span>

  </div>

</template>

<script setup lang='ts'>
import useInfoStore from '../../store/modules/info';
// 获取小仓库对象
const infoStore = useInfoStore();

// 引入组合式api函数仓库
import useTodoStore from '../../store/modules/todo';
let todoStore = useTodoStore();

// 点击span标签修改仓库数据
const updateTodo = () => {
  todoStore.updateTodo();
}

</script>
<style scoped>
.child1 {
  width: 300px;
  height: 200px;
  background-color: lightcoral;
}
</style>
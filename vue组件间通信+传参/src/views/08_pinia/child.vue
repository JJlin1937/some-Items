<template>

<div class="child">
  <h2>{{ infoStore.count }}----{{ infoStore.total }}</h2>
  <button @click="updateCount">点击我修改仓库数据</button>
</div>

</template>

<script setup lang='ts'>
import useInfoStore from '../../store/modules/info';
// 获取小仓库对象
const infoStore = useInfoStore();
console.log(infoStore);
// 修改仓库数据的方法
const updateCount = () => {
  // 写法1：直接修改仓库数据
  // infoStore.count++;
  // 写法2：使用$patch方法修改仓库数据
  // infoStore.$patch({
  //   count: infoStore.count + 1
  // });
  // 写法3：使用小仓库中的actions方法修改仓库数据
  infoStore.updateNum(66,77);
}

</script>
<style scoped>
.child{
  width: 300px;
  height: 200px;
  background-color: skyblue;
}
</style>
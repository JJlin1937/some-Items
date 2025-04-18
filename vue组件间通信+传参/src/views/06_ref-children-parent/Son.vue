<template>

  <div class="son">
    <h3>我是儿子：曹植,我的账号余额{{ money }}</h3>
  </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue'
// 儿子钱数
const money = ref(500)
const fly = () => {
  console.log('飞起来了')
}

// 组件内部的数据对外关闭，别人不能方法
// 如果想让别人访问到这个数据，需要通过defineExpose暴露出去
defineExpose({
  money,fly
})


</script>
<style scoped>
.son {
  width: 400px;
  height: 200px;
  background-color: lightblue;
}
</style>
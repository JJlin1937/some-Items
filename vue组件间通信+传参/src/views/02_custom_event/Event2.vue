<template>

  <div class="son">
    <p>我是子组件2</p>
    <button @click="handler">点击我触发自定义事件xxx</button>
  </div>

</template>

<script setup lang='ts'>
// 利用defineEmits方法返回函数触发自定义事件
// defineEmits方法不需要引入，直接使用即可

const $emit = defineEmits(['xxx','click'])

// 
const handler = () => {
  // 第一个参数：事件类型，第二个|三个参数|N个：传递给父组件的数据
  $emit('xxx', '子弹','ak47','M4A1','SCAR-L')
}
</script>
<style scoped>
.son {
  width: 400px;
  height: 200px;
  background-color: steelblue;
}
</style>
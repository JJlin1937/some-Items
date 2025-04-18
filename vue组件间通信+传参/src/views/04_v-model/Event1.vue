<template>

  <div class="son">
    <h3>儿子钱数：{{ modelValue }}</h3>
    <button @click="handler">父子组件数据同步</button>
  </div>

</template>

<script setup lang='ts'>
// 接受父组件传递过来的数据
const props = defineProps(['modelValue']);
// 子组件内部按钮的点击回调
let $emit = defineEmits(['update:modelValue']);
// 触发自定义事件
const handler = () => {
  // 第一个参数：事件类型，第二个参数：事件携带的数据
  $emit('update:modelValue', props.modelValue+1000);
};

</script>
<style scoped>
.son {
  width: 400px;
  height: 200px;
  background-color: seagreen;
}
</style>
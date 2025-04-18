<template>

  <!-- <div :title="$attrs.title"> -->
  <div :title="title">
    <el-button :="$attrs"></el-button>
    <h1 :="{a:1,b:2}"></h1>
  </div>

</template>

<script setup lang='ts'>
// 接收父组件传递过来的数据
// defineProps(['type', 'size', 'icon', 'circle']);

// vue3提供了一个方法useAttrs方法，可以获取组件身上的属性和事件！！！
// import { useAttrs } from 'vue';
// console.log(useAttrs());
// let $attrs = useAttrs();

// 使用props也可以接收title属性，但是props拿到后useAttrs就拿不到了！！！
// props是响应式的，useAttrs拿到的是一个普通对象，不是响应式的！！！
let props = defineProps(['title']);
console.log(props.title);


</script>
<style scoped></style>
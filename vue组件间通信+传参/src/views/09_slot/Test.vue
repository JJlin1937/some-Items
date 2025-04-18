<template>

  <div class="box">
    <h2>我是子组件：默认插槽</h2>
    <slot></slot>
    <hr>
    <h2>我是子组件：具名插槽1</h2>
    <slot name="a"></slot>
    <h2>我是子组件：具名插槽2</h2>
    <slot name="b"></slot>
  </div>

</template>

<script setup lang='ts'>

</script>
<style scoped>
.box {
  width: 800px;
  height: 400px;
  background-color: skyblue;
}
</style>
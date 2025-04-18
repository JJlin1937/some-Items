<template>

  <div class="box">
    <h2>作用域插槽</h2>
    <ul>
      <li v-for="(item,index) in todos" :key="item.id">
        <!-- 作用域插槽特点：可以将数据回传给父组件 -->
        <slot :row="item" :index="index"></slot>
      </li>
    </ul>
  </div>

</template>

<script setup lang='ts'>
// 通过props接收父组件传递过来的数据
defineProps(['todos']);
</script>
<style scoped>
.box {
  width: 800px;
  height: 400px;
  background-color: skyblue;
}
</style>
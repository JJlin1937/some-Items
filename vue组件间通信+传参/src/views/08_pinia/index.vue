<template>
  <div class="box">
    <h2>pinia</h2>
    <div class="content">
      <child></child>
    <hr>
    <child1></child1>
    </div>
  </div>

</template>

<script setup lang='ts'>
import child from './child.vue'
import child1 from './child1.vue'

// vuex：集中式状态管理工具，可以实现任意组件间通信，语法复杂，使用不方便，性能较差
// 核心概念：store、state、getter、mutation、action
// pinia：vue3的状态管理工具，轻量级，语法简单，使用方便，性能更好
// 核心概念：store、state(存储数据)、getter(计算属性)、action(处理业务和异步请求)
// pinia的使用：
// 1.安装pinia：npm install pinia --save
// 2.在main.ts中引入pinia，并挂载到vue实例上
// 3.创建store：在src/store目录下创建一个store.ts文件，定义store
// 4.在组件中使用store：在组件中引入store，并使用store的state、getter、action等属性和方法
// 5.使用store的state、getter、action等属性和方法时，使用store.$state、store.$getters、store.$actions等方式访问



</script>
<style scoped>
.box {
  width: 800px;
  height: 400px;
  background-color: steelblue;
}
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
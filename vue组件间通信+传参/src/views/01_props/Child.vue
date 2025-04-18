<template>

  <div class="son">
    <h2>我是子组件：曹植</h2>
    <p>{{ props.info }}</p>
    <p>{{ props.moneny }}</p>
    <!-- props可省略前面名字 -->
    <p>{{ info }}</p>
    <p>{{ moneny }}</p>
    <button @click="updateProps">需要props数据</button>
  </div>

</template>

<script setup lang='ts'>
import { defineProps } from 'vue'
// defineProps：定义props数据，接收父组件传递的数据,不需要引入直接使用
let props = defineProps({
  info: String, // 父组件传递过来的数据
  moneny: Number, // 父组件传递过来的数据
})

// updateProps：更新props数据，props数据只读，不能修改
let updateProps = () => {
  // props.info = '曹植'
  // props.moneny = 100
} 

</script>
<style scoped>
.son {
  width: 400px;
  height: 200px;
  background-color: hotpink;
}
</style>
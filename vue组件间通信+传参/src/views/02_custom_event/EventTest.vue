<template>

  <div>
    <h1>事件</h1>
    <!-- 原生DOM事件 -->
     <pre @click="handler">
      老马识途，人穷志短
     </pre>
     <button @click="handler1(1,2,3,$event)">点击我传递多个参数</button>
     <hr>
     <!-- 
      vue2中这种写法自定义事件，可以通过.native修饰符绑定原生DOM事件
      vue3中下面写法即为原生DOM事件，直接绑定即可

      vue3:原生的DOM事件不管放在标签身上、组件标签身上都是原生DOM事件
     -->
     <Event1 @click="handler2"></Event1>
     <hr>
     <!-- 绑定自定义事件xxx:实现子组件给父组件传递数据 -->
     <Event2 @xxx="handle3" @click="handler4"></Event2>
  </div>

</template>

<script setup lang='ts'>
// 引入子组件
import Event1 from './Event1.vue'
import Event2 from './Event2.vue'
// 事件回调 -1
const handler = (event:any) => {
  console.log(event);
  
  alert('老马识途，人穷志短')
}
// 事件回调 -2
const handler1 = (a:number,b:number,c:number,$event:any) => {
  console.log(a,b,c,$event);
}
// 事件回调 -3
const handler2 = () => {
  console.log(123);
}
// 事件回调 -4
const handle3 = (param1,param2,param3) => {
  console.log(param1,param2,param3);
}
// 事件回调 -5
const handler4 = () => {
  alert(456);
}

</script>
<style scoped>

</style>
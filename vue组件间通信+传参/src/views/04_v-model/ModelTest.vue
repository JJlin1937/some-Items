<template>

  <div class="event-bus">
    <h2>v-model父亲钱数：{{ money }}</h2>
    <h2>v-model父亲页码：{{ pageNo }}</h2>
    <h2>v-model父亲页面大小：{{ pageSize }}</h2>
    <hr>
    <div class="content">
      <!-- <Event1 :modelValue="money" @update:modelValue="handler"></Event1> -->
       <!-- 
          v-model在组件身上使用
          1）相当于给子组件传递props[modelValue] = 10000
          2）相当于给子组件绑定了一个自定义事件@update:modelValue
         -->
      <Event1 v-model="money"></Event1>
      <Event2 v-model:pageNo="pageNo" v-model:pageSize="pageSize"></Event2>
    </div>
  </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue'
// v-model指令：收集表单数据，数据双向绑定
// v-model 也可以实现组件之间的通信，实现父子组件之间的通信
// 1. v-model的本质是语法糖，等同于 :value="value" @input="(e) => $emit('update:value', e)"
// 父组件给子组件数据 props
// 子组件给父组件数据 自定义事件

// 引入子组件
import Event1 from './Event1.vue'
import Event2 from './Event2.vue'

let money = ref(10000)

const handler = (num:number) => {
  console.log('父组件接收到了子组件传递过来的数据：' + num);
  money.value = num; // 将子组件传递过来的数据赋值给父组件的响应式数据
  
}

// 父亲的数据
let pageNo = ref(1)
let pageSize = ref(10)

</script>
<style scoped>
.event-bus{
  width: 100vh;
  height: 400px;
  background-color: yellowgreen;
}
.content{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
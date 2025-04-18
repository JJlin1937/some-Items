<template>

  <div>
    <h2>slot</h2>
    <Test1 :todos="todos">
      <template v-slot="{ row,index }">
        <span :style="{ color: row.done ? 'red' : 'green' }">{{ row.name }}---{{ index }}</span>
      </template>
    </Test1>
    <Test>
      <div>
        <pre>一首诗：大江东去浪淘尽</pre>
      </div>
      <!-- 具名插槽填充a -->
      <template #a>
        <div>一首诗：千古风流人物</div>
      </template>
      <!-- 具名插槽填充b -->
      <template #b>
        <div>一首诗：浪花淘尽英雄</div>
      </template>

    </Test>
  </div>

</template>

<script setup lang='ts'>
import Test from './Test.vue';
import Test1 from './Test1.vue';
// 插槽：默认插槽、具名插槽、作用域插槽
// 1. 默认插槽：<slot></slot>
// 2. 具名插槽：<slot name="name"></slot>
// 3. 作用域插槽：<slot v-slot:slotName="slotProps"></slot>，在父组件中使用时，使用v-slot指令来绑定插槽的props

import { ref } from 'vue';
// todos数据
let todos = ref([
  { id: 1, name: '吃饭',done: true, },
  { id: 2, name: '睡觉',done: false, },
  { id: 3, name: '打豆豆',done: true, },
  { id: 4, name: '打游戏',done: false, },
]);


</script>
<style scoped>
</style>
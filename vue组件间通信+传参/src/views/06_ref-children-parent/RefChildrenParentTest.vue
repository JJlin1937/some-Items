<template>

  <h2>ref与$parent</h2>
  <div class="father">
    <h2>我是父亲：曹操，我的账号余额：{{ money }}</h2>
    <button @click="handler">找我儿子借钱10块</button>
    <hr>
    <div class="content">
      <Son ref="son"></Son>
      <Daughter></Daughter>
    </div>
  </div>

</template>

<script setup lang='ts'>
// ref:可以获取真实的dom节点，可以获取到子组件实例VC
// $parent:可以在子组件内部获取到父组件实例VC
// 引入子组件
import Son from './Son.vue';
import Daughter from './Daughter.vue';
import { ref } from 'vue';

// 父组件钱数
let money = ref(10000000);
// 获取子组件实例
const son = ref();
const handler = ()=>{
  money.value += 10;
  console.log(son.value); // 获取到子组件实例
  son.value.money -= 10; // 直接修改子组件实例中的数据
  son.value.fly(); // 调用子组件实例中的方法 
}
// 对外暴露
defineExpose({
  money
}) 
</script>
<style scoped>
.father {
  width: 1000px;
  height: 400px;
  background-color: lightcoral;
}
.content{ 
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
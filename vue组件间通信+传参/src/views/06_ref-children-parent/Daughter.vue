<template>

  <div class="daughter">
    <h3>我是女儿：曹节，我的零花钱有{{ money }}</h3>
    <button @click="handler($parent)">点击我，父亲给我1000元</button>
  </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue'

const money = ref(5000) // 女儿钱数

// 发送事件
const handler = ($parent: any) => {
  money.value += 1000
  console.log($parent) // 获取到父组件实例
  $parent.money -= 1000 // 直接修改父组件实例中的数据;
};

</script>
<style scoped>
.daughter {
  width: 400px;
  height: 200px;
  background-color: lightgreen;
}
</style>
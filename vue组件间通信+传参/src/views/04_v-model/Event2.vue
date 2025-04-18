<template>

  <div class="son">
    <p>同时绑定多个v-model</p>
    <button @click="$emit('update:pageNo',pageNo+1)">pageNo：{{ pageNo }}</button>
    <p></p>
    <button @click="$emit('update:pageSize',pageSize+4)">pageSize：{{ pageSize }}</button>
  </div>

</template>

<script setup lang='ts'>
let props = defineProps(['pageNo','pageSize']);
let $emit = defineEmits(['update:pageNo','update:pageSize']);

</script>
<style scoped>
.son {
  width: 400px;
  height: 200px;
  background-color: steelblue;
}
</style>
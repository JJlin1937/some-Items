<template>
  <el-carousel height="400px">
    <el-carousel-item v-for="item in list" :key="item.id">
      <img style="width: 1100px;height: 400px;" :src="item.imgUrl" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<!-- <script>
export default {
  name: "AppBanner",
  props:{
    list:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script> -->

<script setup>
import { defineProps } from 'vue';
defineOptions({
  name: 'AppBanner'
})

defineProps(['list'])


</script>


<style lang="less" scoped></style>
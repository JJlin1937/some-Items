<template>
  <div class="my-panel w">
    <!-- 头部区域 -->
    <div class="header">
      <h3>
        {{ title }}
        <small>{{ subTitle }}</small>
      </h3>
      <!-- 插槽 -->
      <slot name="right"></slot>
    </div>
    <!-- 默认插槽 -->
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

// 定义组件名称
defineOptions({
  name: 'MyPanel'
})

// 定义组件属性
const props = defineProps({
  title: {
    type: String,
    default: '主标题'
  },
  subTitle: {
    type: String,
    default: '副标题'
  }
})
</script>

<style lang="less" scoped>
.my-panel {
  background-color: #fff;
  .header {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    h3{
      flex: 1;
      font-size: 32px;
      text-align: left;
      font-weight: normal;
      small{
        font-size: 16px;
        color: #999;
        margin-left: 10px;
      }
    }
    
  }
}
</style>
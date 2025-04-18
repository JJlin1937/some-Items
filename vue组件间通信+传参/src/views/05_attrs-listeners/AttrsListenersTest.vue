<template>

  <div class="event-bus">
    <h2>useAttrs</h2>
    <el-button type="primary" size="small" :icon="Edit" circle ></el-button>
  </div>
  <!-- 自定义组件 -->
  <HintButton type="primary" size="small" :icon="Edit" title="编辑按钮" circle>  
  </HintButton>    

</template>

<script setup lang='ts'>
// vue3提供了一个方法useAttrs方法，可以获取组件身上的属性和事件！！！
// 图标组件
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import HintButton from './HintButton.vue';
</script>
<style scoped></style>
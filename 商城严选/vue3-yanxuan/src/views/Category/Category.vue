<template>
  <div class="category w">
    <!-- 面包屑 -->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ category.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!-- 轮播图 -->
    <AppBanner :list="list" />

    <!-- 分类展示 -->
    <div class="sub-list">
      <h3>全部分类</h3>
      <ul>
        <li v-for="item in category.subCateList" :key="item.id">
          <a href="#">
            <img :src="item.bannerUrl" alt="">
            <div class="sub-name">{{ item.name }}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { getBannerList } from '@/api';
import { onMounted, ref,computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const list = ref([])

const store = useStore()
const route = useRoute()
const category = computed(()=>{
  let cate = {}
  const item = store.state.category.cateList.find(item => item.id == route.params.id)
  if(item) cate = item
  return cate
})

onMounted(async () => {
  try {
    const res = await getBannerList()
    if (res.msg == '操作成功') {
      list.value = res.result
    }
  } catch (error) {
    console.log(error)
  }
})
</script>

<style lang="less" scoped>
.category {
  padding: 15px 40px;
  .breadcrumb {
    padding: 10px;
  }
  .sub-list {
    h3 {
      font-size: 32px;
      font-weight: normal;
      text-align: center;
      line-height: 150px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 140px;
        height: 160px;
        text-align: center;
        img {
          width: 80px;
          height: 80px;
          margin:5px 0;
        }
        &:hover {
          .sub-name {
            color: @xtxColor;
          }
        }
      }
    }
    
  }
}
</style>